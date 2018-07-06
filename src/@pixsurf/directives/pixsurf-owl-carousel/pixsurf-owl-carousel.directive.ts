import { AfterViewInit, Directive, ElementRef, HostListener, Input, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Platform } from '@angular/cdk/platform';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { OwlCarousel } from 'ngx-owl-carousel';
import * as _ from 'lodash';

import { PixsurfConfigService } from '@pixsurf/services/config.service';

@Directive({
    selector: '[pixsurfOwlCarousel]'
})
export class PixsurfOwlCarouselDirective implements AfterViewInit, OnDestroy {

    isInitialized: boolean;
    isMobile: boolean;
    oc: OwlCarousel;

    // Private
    private _enabled: boolean | '';
    private _options: any;
    private _debouncedUpdate: any;
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {ElementRef} elementRef
     * @param {PixsurfConfigService} _pixsurfConfigService
     * @param {Platform} _platform
     * @param {Router} _router
     */
    constructor(
        public elementRef: ElementRef,
        private _pixsurfConfigService: PixsurfConfigService,
        private _platform: Platform,
        private _router: Router
    ) {
        // Set the defaults
        this.isInitialized = false;
        this.isMobile = false;

        // Set the private defaults
        this._enabled = false;
        this._debouncedUpdate = _.debounce(this.update, 150);
        this._options = {
            updateOnRouteChange: false
        };
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Perfect Scrollbar options
     *
     * @param value
     */
    @Input()
    set pixsurfOwlCarouselOptions(value) {
        // Merge the options
        this._options = _.merge({}, this._options, value);
    }

    get pixsurfOwlCarouselOptions(): any {
        // Return the options
        return this._options;
    }

    /**
     * Is enabled
     *
     * @param {boolean | ""} value
     */
    @Input('pixsurfOwlCarousel')
    set enabled(value: boolean | '') {
        if (value === '') {
            value = true;
        }

        if (this.enabled === value) {
            return;
        }

        this._enabled = value;

        if (this.enabled) {
            this._init();
        }
        else {
            this._destroy();
        }
    }

    get enabled(): boolean | '' {
        return this._enabled;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * After view init
     */
    ngAfterViewInit(): void {
        this._pixsurfConfigService.config
        .pipe(takeUntil(this._unsubscribeAll))
        .subscribe(
            (settings) => {
                this.enabled = settings.OwlCarousel;
            }
        );
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        this._destroy();

        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Initialize
     *
     * @private
     */
    _init(): void {

    }

    /**
     * Destroy
     *
     * @private
     */
    _destroy(): void {

    }

    update(): void
    {
        if ( !this.isInitialized )
        {
            return;
        }

        // Update the owl carousel
        // this.oc.update();
    }

    destroy(): void
    {
        this.ngOnDestroy();
    }

    animateSlider(target: string, value: number, speed?: number): void
    {

    }
}