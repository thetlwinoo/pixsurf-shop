import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import * as $ from 'jquery';

@Component({
    selector   : 'layout1',
    templateUrl: './layout1.component.html',
    styleUrls  : ['./layout1.component.scss']
})

export class Layout1Component implements OnInit, OnDestroy
{    
    @Input() options:any;
    @Input() slides:any;
    // Private
    private _unsubscribeAll: Subject<any>;

    constructor()
    {                
        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void
    {
        
    }
   
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
