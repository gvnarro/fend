import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
declare var App: any;
declare var Registration: any;
declare var StyleSwitcher: any;

@Component({
    moduleId: module.id,
    selector: 'sd-register',
    templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {
    constructor() { }

    ngOnInit() { 

        jQuery(document).ready(function() {
			App.init();
			App.initScrollBar();
			Registration.initRegistration();
			StyleSwitcher.initStyleSwitcher();
		});
    }
}