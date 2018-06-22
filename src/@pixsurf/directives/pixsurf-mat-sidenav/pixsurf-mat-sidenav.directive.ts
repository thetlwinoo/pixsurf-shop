import { Directive, Input, OnInit, HostListener, OnDestroy, HostBinding } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { ObservableMedia } from '@angular/flex-layout';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { PixsurfMatchMediaService } from '@pixsurf/services/match-media.service';
import { PixsurfMatSidenavHelperService } from '@pixsurf/directives/pixsurf-mat-sidenav/pixsurf-mat-sidenav.service';

@Directive({
    selector: '[pixsurfMatSidenavHelper]'
})
export class PixsurfMatSidenavHelperDirective implements OnInit, OnDestroy
{
    @HostBinding('class.mat-is-locked-open')
    isLockedOpen: boolean;

    @Input('pixsurfMatSidenavHelper')
    id: string;

    @Input('mat-is-locked-open')
    matIsLockedOpenBreakpoint: string;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {PixsurfMatchMediaService} _pixsurfMatchMediaService
     * @param {PixsurfMatSidenavHelperService} _pixsurfMatSidenavHelperService
     * @param {MatSidenav} _matSidenav
     * @param {ObservableMedia} _observableMedia
     */
    constructor(
        private _pixsurfMatchMediaService: PixsurfMatchMediaService,
        private _pixsurfMatSidenavHelperService: PixsurfMatSidenavHelperService,
        private _matSidenav: MatSidenav,
        private _observableMedia: ObservableMedia
    )
    {
        // Set the defaults
        this.isLockedOpen = true;

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Register the sidenav to the service
        this._pixsurfMatSidenavHelperService.setSidenav(this.id, this._matSidenav);

        if ( this._observableMedia.isActive(this.matIsLockedOpenBreakpoint) )
        {
            this.isLockedOpen = true;
            this._matSidenav.mode = 'side';
            this._matSidenav.toggle(true);
        }
        else
        {
            this.isLockedOpen = false;
            this._matSidenav.mode = 'over';
            this._matSidenav.toggle(false);
        }

        this._pixsurfMatchMediaService.onMediaChange
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => {
                if ( this._observableMedia.isActive(this.matIsLockedOpenBreakpoint) )
                {
                    this.isLockedOpen = true;
                    this._matSidenav.mode = 'side';
                    this._matSidenav.toggle(true);
                }
                else
                {
                    this.isLockedOpen = false;
                    this._matSidenav.mode = 'over';
                    this._matSidenav.toggle(false);
                }
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}

@Directive({
    selector: '[pixsurfMatSidenavToggler]'
})
export class PixsurfMatSidenavTogglerDirective
{
    @Input('pixsurfMatSidenavToggler')
    id;

    /**
     * Constructor
     *
     * @param {PixsurfMatSidenavHelperService} _pixsurfMatSidenavHelperService
     */
    constructor(
        private _pixsurfMatSidenavHelperService: PixsurfMatSidenavHelperService)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * On click
     */
    @HostListener('click')
    onClick()
    {
        this._pixsurfMatSidenavHelperService.getSidenav(this.id).toggle();
    }
}
