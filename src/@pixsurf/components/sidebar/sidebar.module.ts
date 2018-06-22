import { NgModule } from '@angular/core';

import { PixsurfSidebarComponent } from './sidebar.component';

@NgModule({
    declarations: [
        PixsurfSidebarComponent
    ],
    exports     : [
        PixsurfSidebarComponent
    ]
})
export class PixsurfSidebarModule
{
}
