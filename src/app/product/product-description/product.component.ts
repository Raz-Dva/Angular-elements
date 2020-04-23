import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {
  id:number;
  title:string;
  available:string;
  country:string;
  hash:any;
  constructor(private route:ActivatedRoute, private router:Router) { 
    this.id= +this.route.snapshot.params['id'];
    this.title = this.route.snapshot.params['title'];
    this.available = this.route.snapshot.queryParams['available'];
    this.country = this.route.snapshot.queryParams['country'];
    // this.hash=this.route.snapshot.fragment;

    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.title = params['title']; 
    });    
    this.route.queryParams.subscribe((params: Params)=>{
      this.available = params['available'];
      this.country = params['country'];
      // this.hash = 
    });
  }
  ngOnInit() {};
  openToshiba(){
    this.router.navigate(['/product', 4, 'Toshiba TV'], {
      queryParams:{
        available:'yes',
        country:'USA'
      },
      fragment:'pic'
    })
  }

}
