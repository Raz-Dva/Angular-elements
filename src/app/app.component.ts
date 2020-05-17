import { Component, OnInit, } from '@angular/core';
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';
import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes,
  state,
  animation,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [' ul > li .active{background-color: #C7C7C7; color: #fff; }'],
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
            style({ left: '-100%'}),
            animate(2000,
              style({
                left:0
              }))
          ], { optional: true }),
          query(':leave .wrap_component', [
            style({
              left:0
            }),
            animate(2000, style({
              left:'100%'
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
    console.log( outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']);
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  } 
  
}
