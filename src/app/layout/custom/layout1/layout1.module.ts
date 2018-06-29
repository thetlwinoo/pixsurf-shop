import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material';

import { 
  MatIconModule
} from '@angular/material';

import { PixsurfSidebarModule } from '@pixsurf/components';
import { PixsurfSharedModule } from '@pixsurf/shared.module';

import { HeaderModule } from 'app/layout/components/header/header.module';
import { ContentModule } from 'app/layout/components/content/content.module';
import { FooterModule } from 'app/layout/components/footer/footer.module';
import { NavbarModule } from 'app/layout/components/navbar/navbar.module';
import { ToolbarModule } from 'app/layout/components/toolbar/toolbar.module';

import { CustomLayout1Component } from './layout1.component';

@NgModule({
  declarations: [
    CustomLayout1Component
  ],
  imports: [
    MatIconModule,    
    MatSidenavModule,

    PixsurfSharedModule,
    PixsurfSidebarModule,

    HeaderModule,
    ContentModule,
    FooterModule,
    NavbarModule,
    ToolbarModule
  ],
  exports: [
    CustomLayout1Component
  ]
})
export class CustomLayout1Module { }
