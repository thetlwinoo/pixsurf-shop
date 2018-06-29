import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { 
  MatIconModule,
  MatMenuModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatButtonModule,
} from '@angular/material';
import { PixsurfSharedModule } from '@pixsurf/shared.module';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonModule,
    
    CommonModule,
    PixsurfSharedModule    
  ],
  exports: [
    HeaderComponent
  ]

})
export class HeaderModule { }
