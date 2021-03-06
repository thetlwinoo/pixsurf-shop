import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarModule } from 'app/layout/components/navbar/navbar.module';
import { PixsurfSharedModule } from '@pixsurf/shared.module';
import { PixsurfOwlCarouselModule } from '@pixsurf/components';

import { HomeService } from './home.service';

import { HomeComponent } from './home.component';
import { ContentTopComponent } from './content-top/content-top.component';
import { ProductBoxComponent } from './product-box/product-box.component';
import { ProductHotdealComponent } from './product-hotdeal/product-hotdeal.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { MainCenterComponent } from './productBox/main-center/main-center.component';
import { MainLeftComponent } from './productBox/main-left/main-left.component';
import { MainNoneComponent } from './productBox/main-none/main-none.component';
import { MainRightComponent } from './productBox/main-right/main-right.component';
import { PreviewComponent } from './productBox/preview/preview.component';
import { MenuLeftComponent } from './content-top/menu-left/menu-left.component';
import { OwlModule } from 'ngx-owl-carousel';

const routes = [
  {
    path: '**',
    component: HomeComponent,
    resolve: {
      data: HomeService
    }
  }
];

const HOME_SERVICES = [];

@NgModule({
  declarations: [
    HomeComponent,
    ContentTopComponent,
    ProductBoxComponent,
    ProductHotdealComponent,
    TestimonialComponent,
    MainCenterComponent,
    MainLeftComponent,
    MainNoneComponent,
    MainRightComponent,
    PreviewComponent,
    MenuLeftComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    PixsurfOwlCarouselModule,
    OwlModule,
    RouterModule.forChild(routes),

    PixsurfSharedModule
  ],
  providers: [
    HomeService
  ]
})
export class HomeModule { }
