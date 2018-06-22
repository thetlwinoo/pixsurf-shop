import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule, MatRippleModule } from '@angular/material';

import { TranslateModule } from '@ngx-translate/core';

import { PixsurfNavigationComponent } from './navigation.component';
import { PixsurfNavVerticalItemComponent } from './vertical/item/item.component';
import { PixsurfNavVerticalCollapsableComponent } from './vertical/collapsable/collapsable.component';
import { PixsurfNavVerticalGroupComponent } from './vertical/group/group.component';
import { PixsurfNavHorizontalItemComponent } from './horizontal/item/item.component';
import { PixsurfNavHorizontalCollapsableComponent } from './horizontal/collapsable/collapsable.component';

@NgModule({
    imports     : [
        CommonModule,
        RouterModule,

        MatIconModule,
        MatRippleModule,

        TranslateModule.forChild()
    ],
    exports     : [
        PixsurfNavigationComponent
    ],
    declarations: [
        PixsurfNavigationComponent,
        PixsurfNavVerticalGroupComponent,
        PixsurfNavVerticalItemComponent,
        PixsurfNavVerticalCollapsableComponent,
        PixsurfNavHorizontalItemComponent,
        PixsurfNavHorizontalCollapsableComponent
    ]
})
export class PixsurfNavigationModule
{
}