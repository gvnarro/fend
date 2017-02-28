// angular
import { ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/core'; 
// any operators needed throughout your application
import './operators';

// app
import { AnalyticsService } from '../frameworks/analytics/index';
import { BaseComponent, Config, LogService } from '../frameworks/core/index';

/**
 * This class represents the main application component.
 */
@BaseComponent({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',  
  changeDetection: ChangeDetectionStrategy.Default // Everything else uses OnPush
})
export class AppComponent {
  constructor(public analytics: AnalyticsService,
              public log: LogService
              ,private _cookieService: CookieService
              ) {
    log.debug(`Config env: ${Config.ENVIRONMENT().ENV}`);
  }

    ngOnInit() {
      let identifier = this.getCookie('identifier');
      if(!identifier)
        this._cookieService.put('identifier', this.generateUUID());
  }

  getCookie(key: string){
     return this._cookieService.get(key);
   }

   generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
        d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

}
