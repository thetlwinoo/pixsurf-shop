import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PixsurfSharedModule } from '@pixsurf/shared.module';

import { HomeComponent } from './home.component';

const routes = [
  {
      path     : '**',
      component: HomeComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    PixsurfSharedModule
  ],  
})
export class HomeModule { }
