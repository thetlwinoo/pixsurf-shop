import { NgModule } from '@angular/core';

import { VerticalLayout1Module } from './vertical/layout1/layout1.module';

import { HorizontalLayout1Module } from './horizontal/layout1/layout1.module';
import { ContentComponent } from './components/content/content.component';

@NgModule({
    imports: [
        VerticalLayout1Module,
        HorizontalLayout1Module
    ],
    exports: [
        VerticalLayout1Module,
        HorizontalLayout1Module
    ]
})
export class LayoutModule {
}
