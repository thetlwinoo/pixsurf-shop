import { NgModule } from '@angular/core';

// import { PixsurfIfOnDomDirective } from '@pixsurf/directives/pixsurf-if-on-dom/pixsurf-if-on-dom.directive';
// import { PixsurfInnerScrollDirective } from '@pixsurf/directives/pixsurf-inner-scroll/pixsurf-inner-scroll.directive';
import { PixsurfPerfectScrollbarDirective } from '@pixsurf/directives/pixsurf-perfect-scrollbar/pixsurf-perfect-scrollbar.directive';
import { PixsurfMatSidenavHelperDirective, PixsurfMatSidenavTogglerDirective } from '@pixsurf/directives/pixsurf-mat-sidenav/pixsurf-mat-sidenav.directive';

@NgModule({
    declarations: [
        // PixsurfIfOnDomDirective,
        // PixsurfInnerScrollDirective,
        PixsurfMatSidenavHelperDirective,
        PixsurfMatSidenavTogglerDirective,
        PixsurfPerfectScrollbarDirective
    ],
    imports     : [],
    exports     : [
        // PixsurfIfOnDomDirective,
        // PixsurfInnerScrollDirective,
        PixsurfMatSidenavHelperDirective,
        PixsurfMatSidenavTogglerDirective,
        PixsurfPerfectScrollbarDirective
    ]
})
export class PixsurfDirectivesModule
{
}
