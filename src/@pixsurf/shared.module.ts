import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { PixsurfDirectivesModule } from '@Pixsurf/directives/directives';
import { PixsurfPipesModule } from '@Pixsurf/pipes/pipes.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        FlexLayoutModule,

        PixsurfDirectivesModule,
        PixsurfPipesModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        FlexLayoutModule,

        PixsurfDirectivesModule,
        PixsurfPipesModule
    ]
})
export class PixsurfSharedModule {
}
