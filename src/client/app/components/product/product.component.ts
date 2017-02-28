import { Component, OnInit } from '@angular/core';
import { SectorService, CategoryService, ProductService } from './../services/index';
///
declare var jQuery: any;
declare var App: any;
declare var OwlCarousel: any;
declare var StyleSwitcher: any;
declare var MasterSliderShowcase2: any;

@Component({
    moduleId: module.id,
    selector: 'sd-product',
    templateUrl: 'product.component.html'
})
export class ProductComponent implements OnInit {
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
            OwlCarousel.initOwlCarousel();
            StyleSwitcher.initStyleSwitcher();
            MasterSliderShowcase2.initMasterSliderShowcase2();
        });
    }

    loadData() {

    }
}