import { Component, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import { PixsurfNavigationService } from '@pixsurf/components/navigation/navigation.service';
import { PixsurfPerfectScrollbarDirective } from '@pixsurf/directives/pixsurf-perfect-scrollbar/pixsurf-perfect-scrollbar.directive';
import { PixsurfSidebarService } from '@pixsurf/components/sidebar/sidebar.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit, OnDestroy {
  // Layout
  @Input()
  layout;

  pixsurfPerfectScrollbarUpdateTimeout: any;
  navigation: any;

  // Private
  private _pixsurfPerfectScrollbar: PixsurfPerfectScrollbarDirective;
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {PixsurfNavigationService} _pixsurfNavigationService
   * @param {PixsurfSidebarService} _pixsurfSidebarService
   * @param {Router} _router
   */
  constructor(
    private _pixsurfNavigationService: PixsurfNavigationService,
    private _pixsurfSidebarService: PixsurfSidebarService,
    private _router: Router
  ) {
    // Set the defaults
    this.layout = 'vertical';

    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------

  // Directive
  @ViewChild(PixsurfPerfectScrollbarDirective)
  set directive(theDirective: PixsurfPerfectScrollbarDirective) {
    if (!theDirective) {
      return;
    }

    this._pixsurfPerfectScrollbar = theDirective;

    this._pixsurfNavigationService.onItemCollapseToggled
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(() => {
        this.pixsurfPerfectScrollbarUpdateTimeout = setTimeout(() => {
          this._pixsurfPerfectScrollbar.update();
        }, 310);
      });
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    this._router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this._unsubscribeAll)
      )
      .subscribe(() => {
        if (this._pixsurfSidebarService.getSidebar('navbar')) {
          this._pixsurfSidebarService.getSidebar('navbar').close();
        }
      }
      );

    // Get current navigation
    this._pixsurfNavigationService.onNavigationChanged
      .pipe(filter(value => value !== null))
      .subscribe(() => {
        this.navigation = this._pixsurfNavigationService.getCurrentNavigation();
      });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    if (this.pixsurfPerfectScrollbarUpdateTimeout) {
      clearTimeout(this.pixsurfPerfectScrollbarUpdateTimeout);
    }

    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Toggle sidebar opened status
   */
  toggleSidebarOpened(): void {
    this._pixsurfSidebarService.getSidebar('navbar').toggleOpen();
  }

  /**
   * Toggle sidebar folded status
   */
  toggleSidebarFolded(): void {
    this._pixsurfSidebarService.getSidebar('navbar').toggleFold();
  }
}
