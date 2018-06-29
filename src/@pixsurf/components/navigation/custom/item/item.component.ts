import { Component, HostBinding, Input } from '@angular/core';

import { PixsurfNavigationItem } from '@pixsurf/types';

@Component({
    selector   : 'pixsurf-nav-custom-item',
    templateUrl: './item.component.html',
    styleUrls  : ['./item.component.scss']
})
export class PixsurfNavCustomItemComponent
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
