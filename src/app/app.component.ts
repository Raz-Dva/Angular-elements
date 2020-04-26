import { Component, Pipe, Directive } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [' ul > li .active{background-color: #C7C7C7; color: #fff; }']
})
export class AppComponent {
  title = 'App Angular Components';
  

  constructor(private router: Router, private route : ActivatedRoute){};

  linkFormComponent(){
    // this.router.navigate(['/reactform']);  // global path
    this.router.navigate(['reactform'], {relativeTo: this.route})  //local path
    //  this.router.navigate(['reactform'], {relativeTo: this.route
  }
  
}
