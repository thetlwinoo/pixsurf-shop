import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { PIXSURF_CONFIG, PixsurfConfigService } from '@pixsurf/services/config.service';
import { PixsurfMatchMediaService } from '@pixsurf/services/match-media.service';
import { PixsurfMatSidenavHelperService } from '@pixsurf/directives/pixsurf-mat-sidenav/pixsurf-mat-sidenav.service';
import { PixsurfNavigationService } from '@pixsurf/components/navigation/navigation.service';
import { PixsurfSidebarService } from '@pixsurf/components/sidebar/sidebar.service';
import { PixsurfSplashScreenService } from '@pixsurf/services/splash-screen.service';
import { PixsurfTranslationLoaderService } from '@pixsurf/services/translation-loader.service';

@NgModule({
    entryComponents: [],
    providers: [
        PixsurfConfigService,
        PixsurfMatchMediaService,
        PixsurfMatSidenavHelperService,
        PixsurfNavigationService,
        PixsurfSidebarService,
        PixsurfSplashScreenService,
        PixsurfTranslationLoaderService
    ]
})
export class PixsurfModule {
    constructor(@Optional() @SkipSelf() parentModule: PixsurfModule) {
        if (parentModule) {
            throw new Error('PixsurfModule is already loaded. Import it in the AppModule only!');
        }
    }

    static forRoot(config): ModuleWithProviders {
        return {
            ngModule: PixsurfModule,
            providers: [
                {
                    provide: PIXSURF_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}
