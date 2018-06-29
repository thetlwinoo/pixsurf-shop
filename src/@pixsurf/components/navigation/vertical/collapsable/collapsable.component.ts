import { Component, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import { PixsurfNavigationItem } from '@pixsurf/types';
import { pixsurfAnimations } from '@pixsurf/animations';
import { PixsurfNavigationService } from '@pixsurf/components/navigation/navigation.service';

@Component({
    selector: 'pixsurf-nav-vertical-collapsable',
    templateUrl: './collapsable.component.html',
    styleUrls: ['./collapsable.component.scss']
})
export class PixsurfNavVerticalCollapsableComponent implements OnInit, OnDestroy {
    @Input()
    item: PixsurfNavigationItem;

    @HostBinding('class')
    classes = 'nav-collapsable nav-item';

    @HostBinding('class.open')
    public isOpen = false;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {PixsurfNavigationService} _pixsurfNavigationService
     * @param {Router} _router
     */
    constructor(
        private _pixsurfNavigationService: PixsurfNavigationService,
        private _router: Router
    ) {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void {

    }

    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
