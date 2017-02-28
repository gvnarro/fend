// angular
import { Injectable, Inject } from '@angular/core';
import { Http, Headers, Response} from '@angular/http';
import { CookieService } from 'angular2-cookie/core'; 

// libs
import * as _ from 'lodash';

export interface IAnalyticsCatequilProperties {
  Action?: string;
  Page?: string;
  URL?: string;
  Request?: string;
  Property?: string;
  Value?:string;
  ProductID?: number;
  Sector?: number;
}

export interface IAnalyticsCatequil {
  track(action: string, properties: IAnalyticsCatequilProperties): void;
}

/**
 * Wrapper for Angulartics2
 */
@Injectable()
export class AnalyticsCatequilService implements IAnalyticsCatequil {

  constructor(public http: Http, private _cookieService: CookieService) {
  }

  /**
   * Track actions, events, etc.
   **/
  public track(action: string, properties: IAnalyticsCatequilProperties): void {
    this.http.post("http://localhost:9000/tracker/" + this._cookieService.get("identifier"), properties);
  }

  /**
   * Called automatically by default with Angular 2 Routing
   * However, that can be turned off and this could be used manually
   **/
  public pageTrack(path: string, location: any) {
    if (!this.devMode()) {
      
    }
  }

  /**
   * Identify authenticated users
   **/
  public identify(properties: any) {
    if (!this.devMode()) {
      
    }
  }

  /**
   * Control whether analytics are tracked
   * true: dev mode on, therefore do not track anything
   * false: dev mode off, track everything
   **/
  public devMode(enable?: boolean): boolean {
    if (typeof enable !== 'undefined') {
      
    }
    // return this.angulartics2.settings.developerMode;
    return true;
  }
}

/**
 * Base class
 * Standardizes tracking actions and categorization
 */
export class Analytics implements IAnalyticsCatequil {
  // sub-classes should define their category
  public category: string;

  constructor(@Inject(AnalyticsCatequilService) public analytics: AnalyticsCatequilService) {

  }

  /**
   * Track actions, events, etc.
   **/
  track(action: string, properties: IAnalyticsCatequilProperties): void {
    //this.analytics.track(action, _.extend(properties, { category: this.category }));
    this.analytics.track(action, properties);
  }
}
