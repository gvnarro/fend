import { Component, OnInit } from '@angular/core';
import { SectorService, CategoryService, ProductService } from './../services/index';

////
declare var jQuery: any;
declare var App: any;
declare var MouseWheel: any;
declare var StyleSwitcher: any;

@Component({
    moduleId: module.id,
    selector: 'sd-products',
    templateUrl: 'products.component.html'
})
export class ProductsComponent implements OnInit {
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
            App.initScrollBar();
            MouseWheel.initMouseWheel();
            StyleSwitcher.initStyleSwitcher();
        });
    }
    
    loadData() {

    }
}