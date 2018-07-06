import { Component, OnDestroy, OnInit, ViewEncapsulation, Input, AfterViewInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PixsurfConfigService } from '@pixsurf/services/config.service';

@Component({
    selector     : 'pixsurf-owl-carousel',
    templateUrl  : './owl-carousel.component.html',
    styleUrls    : ['./owl-carousel.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class PixsurfOwlCarouselComponent implements OnInit, OnDestroy, AfterViewInit
{
    @Input() layout: string;
    @Input() options: any;
    @Input() slides: any;

    pixsurfConfig: any;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {PixsurfConfigService} _pixsurfConfigService
     */
    constructor(
        private _pixsurfConfigService: PixsurfConfigService
    )
    {
        // this.options = options;
        this._unsubscribeAll = new Subject();
    }

    ngAfterViewInit(){
console.log(this.layout)
    }

    ngOnInit(): void
    {
        this._pixsurfConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config) => {
                this.pixsurfConfig = config;
            });
    }

    ngOnDestroy(): void
    {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
