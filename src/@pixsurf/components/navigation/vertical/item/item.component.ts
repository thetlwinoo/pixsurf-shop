import { Component, HostBinding, Input } from '@angular/core';

import { PixsurfNavigationItem } from '@pixsurf/types';

@Component({
    selector   : 'pixsurf-nav-vertical-item',
    templateUrl: './item.component.html',
    styleUrls  : ['./item.component.scss']
})
export class PixsurfNavVerticalItemComponent
{
    @HostBinding('class')
    classes = 'nav-item';

    @Input()
    item: PixsurfNavigationItem;

    /**
     * Constructor
     */
    constructor()
    {
    }
}
