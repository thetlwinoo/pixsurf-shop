import { Component, HostBinding, Input } from '@angular/core';

import { PixsurfNavigationItem } from '@pixsurf/types';

@Component({
    selector   : 'pixsurf-nav-vertical-group',
    templateUrl: './group.component.html',
    styleUrls  : ['./group.component.scss']
})
export class PixsurfNavVerticalGroupComponent
{
    @HostBinding('class')
    classes = 'nav-group nav-item';

    @Input()
    item: PixsurfNavigationItem;

    /**
     * Constructor
     */
    constructor()
    {
    }

}
