import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../services/products.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styles:['.nav_products >li > a.active{background-color: #C7C7C7;} a{text-decoration: underline;}']
})
export class NgModelComponent implements OnInit {
  title:string = 'Products';
  products;

  constructor(private productServ : ProductsService) { }

  ngOnInit() {
    this.products = this.productServ.getItem();
  };
  
}
