import { Component, OnInit } from '@angular/core';
import { SectorService, CategoryService, ProductService } from './../services/index';

////
declare var jQuery: any;
declare var jQuery: any;
declare var App: any;
declare var OwlCarousel: any;
declare var RevolutionSlider: any;
declare var StyleSwitcher: any;



@Component({
    moduleId: module.id,
    selector: 'sd-index',
    templateUrl: 'index.component.html'
})
export class IndexComponent implements OnInit {

    sectors: Array<any>;
    categories: Array<any>;
    products: Array<any>;

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
            App.initParallaxBg();
            OwlCarousel.initOwlCarousel();
            RevolutionSlider.initRSfullWidth();
            StyleSwitcher.initStyleSwitcher();
        });
    }

    loadData() {
        this.sectorService.getSectors().then(sectors => {
            this.sectors = sectors;
            // this.categoryService.getCategories().then(categories => {
            //     this.categories = categories;
            //     this.productService.getProducts().then(products => {
            //         this.products = products;
            //     })
            // })
        });
    }
}