import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
declare var App: any;
declare var Login: any;
declare var StyleSwitcher: any;
declare var PageContactForm: any;

@Component({
    moduleId: module.id,
    selector: 'sd-login',
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
    constructor() { }

    ngOnInit() { 
        		jQuery(document).ready(function() {
			App.init();
			Login.initLogin();
			App.initScrollBar();
			StyleSwitcher.initStyleSwitcher();
			PageContactForm.initPageContactForm();
		});
    }
}