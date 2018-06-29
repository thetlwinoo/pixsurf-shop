import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Feathers } from '@pixsurf/services/feathers.service';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class HomeService implements Resolve<any>
{
    categories: any[];    
    onCategoriesChanged: BehaviorSubject<any> = new BehaviorSubject({});
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _httpClient: HttpClient,
        private feathers: Feathers
    ) {
    }

    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {

        return new Promise((resolve, reject) => {

            Promise.all([
                this.getCategories()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }

    /**
     * Get Categories
     *
     * @returns {Promise<any>}
     */
    getCategories(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.categories$()
                .subscribe((response: any) => {
                    this.categories = response;
                    this.onCategoriesChanged.next(this.categories);
                    resolve(response);
                }, reject);
        });
    }

    //feathers API
    private categories$(): Observable<any> {
        return (<any>this.feathers
            .service('general/categories'))
            .watch()
            .find({
                query: {
                    $sort: { createdAt: -1 },
                    $limit: 25
                }
            })
            .map(d => d.data);
    }
}
