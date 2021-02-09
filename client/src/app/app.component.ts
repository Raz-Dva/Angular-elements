import { Component, OnInit, } from '@angular/core';
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';
import {
  trigger,
  transition,
  style,
  query,
  group,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [' ul > li .active{background-color: #C7C7C7; color: #fff; } ul > li{margin-top:5px}'],
  animations:[
    trigger('routeAnimations', [      
      transition('*=>*', [
        style({ position: 'relative' }),
        query(':leave .wrap_component, :enter .wrap_component', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ], { optional: true }),
        group([
          query(':enter .wrap_component', [
            style({ left: '-120%'}),
            animate('700ms cubic-bezier(0.470, -0.125, 0.615, 1.120)',
              style({
                left:0
              }))
          ], { optional: true }),
          query(':leave .wrap_component', [
            style({
              left:0
            }),
            animate('700ms cubic-bezier(0.470, -0.125, 0.615, 1.120)', style({
              left:'120%'
            }))
          ], { optional: true })
        ])        
      ]),
    ])
  ] // end animation
})

export class AppComponent implements OnInit{
  
  title:string = 'App Angular Components';

  constructor(private router: Router, private route : ActivatedRoute){};

  ngOnInit() {  }

  linkFormComponent(){
    this.router.navigate(['reactform'], {relativeTo: this.route})  
  };

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  } 
  
}
