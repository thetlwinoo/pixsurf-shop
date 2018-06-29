import { NgModule } from '@angular/core';

import { VerticalLayout1Module } from './vertical/layout1/layout1.module';
import { HorizontalLayout1Module } from './horizontal/layout1/layout1.module';
import { CustomLayout1Module } from './custom/layout1/layout1.module';

@NgModule({
    imports: [
        VerticalLayout1Module,
        HorizontalLayout1Module,
        CustomLayout1Module
    ],
    exports: [
        VerticalLayout1Module,
        HorizontalLayout1Module,
        CustomLayout1Module
    ],
    declarations: []
})
export class LayoutModule {
}
