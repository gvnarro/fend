import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductService {

    constructor(public http: Http) {

    }

    public getProducts(): Promise<any> {
        let url = 'http://localhost:9000/analytics/product';
        return this.http.get(url)
            .toPromise()
            .then(response => {
                return response.json() as any
            });

    }

    public getProductsUpSell(): Promise<any> {
        let url = 'http://localhost:9000/analytics/productupsell';
        return this.http.get(url)
            .toPromise()
            .then(response => {
                return response.json() as any
            });

    }

    public getProductsCrossSell(): Promise<any> {
        let url = 'http://localhost:9000/analytics/productcrosssell';
        return this.http.get(url)
            .toPromise()
            .then(response => {
                return response.json() as any
            });

    }

    public getProductsPromotional(categoryId: string): Promise<any> {
        let url = 'http://localhost:9000/analytics/promotionalproducts' + categoryId;
        return this.http.get(url)
            .toPromise()
            .then(response => {
                return response.json() as any
            });

    }

    public getProductsNonPromotional(categoryId: string): Promise<any> {
        let url = 'http://localhost:9000/analytics/Nopromotionalproducts' + categoryId;
        return this.http.get(url)
            .toPromise()
            .then(response => {
                return response.json() as any
            });

    }
}