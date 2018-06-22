import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material';

import { PixsurfSidebarModule } from '@pixsurf/components';
import { PixsurfSharedModule } from '@pixsurf/shared.module';

import { ContentModule } from 'app/layout/components/content/content.module';
import { FooterModule } from 'app/layout/components/footer/footer.module';
import { NavbarModule } from 'app/layout/components/navbar/navbar.module';
import { ToolbarModule } from 'app/layout/components/toolbar/toolbar.module';

import { HorizontalLayout1Component } from 'app/layout/horizontal/layout1/layout1.component';

@NgModule({
  declarations: [
    HorizontalLayout1Component
  ],
  imports: [
    MatSidenavModule,

    PixsurfSharedModule,
    PixsurfSidebarModule,

    ContentModule,
    FooterModule,
    NavbarModule,
    ToolbarModule
  ],
  exports: [
    HorizontalLayout1Component
  ]
})
export class HorizontalLayout1Module {
}
