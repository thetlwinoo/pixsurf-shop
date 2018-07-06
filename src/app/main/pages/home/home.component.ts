import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HomeService } from './home.service';

// import { merge,map,debounceTime,distinctUntilChanged, startWith } from 'rxjs/operators'
import { Observable, Subscription, BehaviorSubject, fromEvent } from 'rxjs';

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
        console.log(this.categories)
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
