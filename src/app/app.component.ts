import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { PixsurfConfigService } from '@pixsurf/services/config.service';
import { PixsurfNavigationService } from '@pixsurf/components/navigation/navigation.service';
import { PixsurfSidebarService } from '@pixsurf/components/sidebar/sidebar.service';
import { PixsurfSplashScreenService } from '@pixsurf/services/splash-screen.service';
import { PixsurfTranslationLoaderService } from '@pixsurf/services/translation-loader.service';

import { navigation } from 'app/navigation/navigation';
import { locale as navigationEnglish } from 'app/navigation/i18n/en';
import { locale as navigationMyanmar } from 'app/navigation/i18n/mm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  navigation: any;
  pixsurfConfig: any;

  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {PixsurfConfigService} _pixsurfConfigService
   * @param {PixsurfNavigationService} _pixsurfNavigationService
   * @param {PixsurfSidebarService} _pixsurfSidebarService
   * @param {PixsurfSplashScreenService} _pixsurfSplashScreenService
   * @param {PixsurfTranslationLoaderService} _pixsurfTranslationLoaderService
   * @param {TranslateService} _translateService
   */
  constructor(
    private _pixsurfConfigService: PixsurfConfigService,
    private _pixsurfNavigationService: PixsurfNavigationService,
    private _pixsurfSidebarService: PixsurfSidebarService,
    private _pixsurfSplashScreenService: PixsurfSplashScreenService,
    private _pixsurfTranslationLoaderService: PixsurfTranslationLoaderService,
    private _translateService: TranslateService
  ) {
    // Get default navigation
    this.navigation = navigation;

    // Register the navigation to the service
    this._pixsurfNavigationService.register('main', this.navigation);

    // Set the main navigation as our current navigation
    this._pixsurfNavigationService.setCurrentNavigation('main');

    // Add languages
    this._translateService.addLangs(['en', 'mm']);

    // Set the default language
    this._translateService.setDefaultLang('en');

    // Set the navigation translations
    this._pixsurfTranslationLoaderService.loadTranslations(navigationEnglish, navigationMyanmar);

    // Use a language
    this._translateService.use('en');

    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Subscribe to config changes
    this._pixsurfConfigService.config
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((config) => {
        this.pixsurfConfig = config;
      });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Toggle sidebar open
   *
   * @param key
   */
  toggleSidebarOpen(key): void {
    this._pixsurfSidebarService.getSidebar(key).toggleOpen();
  }
}
