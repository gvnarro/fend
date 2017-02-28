import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SectorService {

    constructor(public http: Http) {

    }

    public getSectors(): Promise<any> {
        let url = 'http://localhost:9000/analytics/sectors';

        var promise = this.http.get(url)
            .toPromise()
            .then(response => response.json() as any);
        return promise;

    }
}