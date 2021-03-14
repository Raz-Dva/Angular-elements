import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: [`
  .wrap-img_product{height:290px}
  img{max-height: 100%; max-width: 100%}
  .p-strong, .span-strong{font-weight:bold}`]
})
export class ProductComponent implements OnInit {
  id: number;
  title: string;
  available: string;
  country: string;
  image: string;
  hash: any;
  visibilitySpinner: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private _ref: ChangeDetectorRef) {

    this.id = this.route.snapshot.params['id'];
    this.title = this.route.snapshot.params['title'];
    this.available = this.route.snapshot.queryParams['available'];
    this.country = this.route.snapshot.queryParams['country'];
    this.image = this.route.snapshot.queryParams['image'];
    this.hash = this.route.snapshot.fragment;

    //////////////// Dynamic change of parameters /////////////////////

    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.title = params['title'];
    });

    this.route.queryParams.subscribe((params: Params) => {
      this.available = params['available'];
      this.country = params['country'];
      this.image = params['image'];

    });
  }

  ngOnInit() {};

  openToshiba() {
    this.router.navigate(['/products', 4, 'Toshiba TV'],
      {
        queryParams: {
          available: 'yes',
          country: 'USA',
          image: '6.jpg'
        },
        fragment: 'anchor7'
      }
    )
  }

}

