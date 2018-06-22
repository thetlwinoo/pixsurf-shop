import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatIconModule } from '@angular/material';

import { PixsurfSearchBarComponent } from './search-bar.component';

@NgModule({
    declarations: [
        PixsurfSearchBarComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,

        MatButtonModule,
        MatIconModule
    ],
    exports     : [
        PixsurfSearchBarComponent
    ]
})
export class PixsurfSearchBarModule
{
}
