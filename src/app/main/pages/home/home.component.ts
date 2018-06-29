import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HomeService } from './home.service';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';
import { Observable, Subscription, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'pixsurf-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  categories: any;
  onCategoriesChangedSubscription: Subscription;

  private _unsubscribeAll: Subject<any>;

  constructor(
    private homeService: HomeService
  ) {
    this.onCategoriesChangedSubscription =
      this.homeService.onCategoriesChanged.subscribe(categories => {
        this.categories = categories;
      });

    this._unsubscribeAll = new Subject();
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
