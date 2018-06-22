import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { PixsurfModule } from '@pixsurf/pixsurf.module';
import { PixsurfSharedModule } from '@pixsurf/shared.module';
import { PixsurfSidebarModule } from '@pixsurf/components';

import { pixsurfConfig } from 'app/pixsurf-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';

const appRoutes: Routes = [
  {
      path        : 'pages',
      loadChildren: './main/pages/pages.module#PagesModule'
  },
  {
      path      : '**',
      redirectTo: 'pages/home'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),

    TranslateModule.forRoot(),

    // Material moment date module
    MatMomentDateModule,

    // Material
    MatButtonModule,
    MatIconModule,

    // Pixsurf modules
    PixsurfModule.forRoot(pixsurfConfig),
    PixsurfSharedModule,
    PixsurfSidebarModule,

    // App modules
    LayoutModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
