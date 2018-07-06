import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    selector   : 'layout2',
    templateUrl: './layout2.component.html',
    styleUrls  : ['./layout2.component.scss']
})

export class Layout2Component implements OnInit, OnDestroy
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
