import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatTooltipModule } from '@angular/material';
import { CookieService } from 'ngx-cookie-service';

import { PixsurfShortcutsComponent } from './shortcuts.component';

@NgModule({
    declarations: [
        PixsurfShortcutsComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,

        FlexLayoutModule,

        MatButtonModule,
        MatDividerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatListModule,
        MatTooltipModule
    ],
    exports     : [
        PixsurfShortcutsComponent
    ],
    providers   : [
        CookieService
    ]
})
export class PixsurfShortcutsModule
{
}
