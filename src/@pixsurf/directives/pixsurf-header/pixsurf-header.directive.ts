import { Directive, ElementRef, HostListener, Input, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Platform } from '@angular/cdk/platform';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import * as _ from 'lodash';

@Directive({
    selector: '[pixsurfHeader]'
})
export class PixsurfHeaderDirective implements OnDestroy {
    isShowOnTop: boolean;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {ElementRef} elementRef
     * @param {Platform} _platform
     * @param {Router} _router
     */
    constructor(
        public elementRef: ElementRef,
        private _platform: Platform,
        private _router: Router
    ) {
        // Set the defaults
        this.isShowOnTop = false;

        this._unsubscribeAll = new Subject();
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
        // Return, if already Show On Top
        if (this.isShowOnTop) {
            return;
        }

        // Set as initialized
        this.isShowOnTop = true;
    }

    /**
     * Destroy
     *
     * @private
     */
    _destroy(): void {
        if (!this.isShowOnTop) {
            return;
        }

        // Clean up
        this.isShowOnTop = false;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Document click
     *
     * @param {Event} event
     */
    @HostListener('window:scroll', ['$event'])
    onWindowScroll(event: Event): void {
        if (window.innerWidth > 767) {
            let ht = this.elementRef.nativeElement.offsetHeight;
            let st = window.scrollY;
            if (window.scrollY > ht) {
                this.isShowOnTop = true;
            }
            else {
                this.isShowOnTop = false;
            }
        }
    }

    /**
     * Destroy the scrollbar
     */
    destroy(): void {
        this.ngOnDestroy();
    }
}
