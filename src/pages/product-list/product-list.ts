import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Product} from "../../interfaces/Product";
import {Observable} from "rxjs/Observable";
import {RestProvider} from "../../providers/rest/rest";
import {ProductDetailPage} from "../product-detail/product-detail";

/**
 * Generated class for the ProductListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html',
})
export class ProductListPage {
  productObservable:Observable<Product[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
                private restProvider:RestProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductListPage');
    this.productObservable = this.restProvider.getProducts();
  }

  navToDetail(product:Product) {
    this.navCtrl.push('ProductDetailPage',{"myProduct" : product});
  }

  createProduct() {
    this.navCtrl.push("ProductDetailPage", {"myProduct" : {}});
  }

}
