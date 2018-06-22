import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PixsurfSharedModule } from '@pixsurf/shared.module';

import { ContentComponent } from 'app/layout/components/content/content.component';

@NgModule({
  declarations: [
    ContentComponent
  ],
  imports: [
    RouterModule,
    PixsurfSharedModule,
  ],
  exports: [
    ContentComponent
  ]
})
export class ContentModule { }
