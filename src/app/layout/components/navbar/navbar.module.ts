import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { PixsurfNavigationModule } from '@pixsurf/components';
import { PixsurfSharedModule } from '@pixsurf/shared.module';

import { NavbarComponent } from 'app/layout/components/navbar/navbar.component';

@NgModule({
    declarations: [
        NavbarComponent
    ],
    imports     : [
        MatButtonModule,
        MatIconModule,

        PixsurfSharedModule,
        PixsurfNavigationModule
    ],
    exports     : [
        NavbarComponent
    ]
})
export class NavbarModule
{
}
