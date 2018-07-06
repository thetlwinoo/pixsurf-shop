import { NgModule } from '@angular/core';
import { PixsurfOwlCarouselComponent } from './owl-carousel.component';
import { Layout1Component } from './components/layout1/layout1.component';
import { Layout2Component } from './components/layout2/layout2.component';
import { OwlModule } from 'ngx-owl-carousel';
import { PixsurfSharedModule } from '@pixsurf/shared.module';

@NgModule({
    declarations: [
        PixsurfOwlCarouselComponent,
        Layout1Component,
        Layout2Component
    ],
    imports     : [
        OwlModule,
        PixsurfSharedModule
    ],
    exports     : [
        PixsurfOwlCarouselComponent
    ]
})
export class PixsurfOwlCarouselModule
{
}
