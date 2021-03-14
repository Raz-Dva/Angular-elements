import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { faCarrot } from '@fortawesome/free-solid-svg-icons';
import {  Router } from '@angular/router';

export interface Product {
  country:string,
    available:string,    
    description:string,
    image:string,
    title:string,
    id:number
};

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styles: [`
  .nav_products >li > a.active{background-color: #C7C7C7;}
  a{text-decoration: underline;}
  .panel .widget{width:100%}
  .p-strong, .span-strong{font-weight:bold}`]
})
export class ProductList implements OnInit {
  title: string = 'Products';
  products:Product;
  faCarrot = faCarrot;  
  requestError:string='';
  
  constructor(private productServ: ProductsService, private router: Router) { }

  ngOnInit() {
    this.getItem();
    this.router.navigate(['/products', 4, 'Toshiba TV'], {
      queryParams: {
        available: 'yes',
        country: 'USA',
        image: '6.jpg'
      },
      fragment: 'anchor7'
    })

  };

  getItem() {
    this.productServ.getItem().subscribe(response => {
      this.products = response;
    }, error=>{
      this.requestError = 'ERROR: ' + error.message;
    })
  } 

}
