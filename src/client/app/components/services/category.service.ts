import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CategoryService {

    constructor(public http: Http) {

    }

    public getCategories(): Promise<any> {
        let url = 'http://localhost:9000/analytics/categories';
        return this.http.get(url)
            .toPromise()
            .then(response => {
                return response.json() as any
            });

    }
     
}