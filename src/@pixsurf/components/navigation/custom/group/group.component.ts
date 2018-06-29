import { Component, HostBinding, Input } from '@angular/core';

import { PixsurfNavigationItem } from '@pixsurf/types';

@Component({
    selector   : 'pixsurf-nav-custom-group',
    templateUrl: './group.component.html',
    styleUrls  : ['./group.component.scss']
})
export class PixsurfNavCustomGroupComponent
{
    @HostBinding('class')
    classes = 'cat-menu-item';

    @Input()
    item: PixsurfNavigationItem;

    /**
     * Constructor
     */
    constructor()
    {
    }

}
