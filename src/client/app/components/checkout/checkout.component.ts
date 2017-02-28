import { Component, OnInit } from '@angular/core';
import { SectorService, CategoryService, ProductService } from './../services/index';
/////
declare var jQuery: any;
declare var $: any;
declare var Login: any;
declare var App: any;
declare var StepWizard: any;
declare var StyleSwitcher: any;


@Component({
    moduleId: module.id,
    selector: 'sd-checkout',
    templateUrl: 'checkout.component.html'
})
export class CheckoutComponent implements OnInit {
    constructor(private sectorService: SectorService,
        private categoryService: CategoryService,
        private productService: ProductService) { }

    ngOnInit() {
        this.loadJqueryComponents();
        this.loadData();
    }

    loadJqueryComponents() {
        jQuery(document).ready(function () {
            App.init();
            Login.initLogin();
            App.initScrollBar();
            StepWizard.initStepWizard();
            StyleSwitcher.initStyleSwitcher();
        });
    }

    loadData() {

    }
}