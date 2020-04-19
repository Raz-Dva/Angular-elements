import { Component, Pipe, Directive } from '@angular/core';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import {  library } from '@fortawesome/fontawesome-svg-core';
import { Router, ActivatedRoute } from '@angular/router';
library.add(faBookmark);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [' ul > li .active{background-color: #C7C7C7; color: #fff; }']
})
export class AppComponent {
  title = 'App Angular Components';
  faBookmark = faBookmark;

  constructor(private router: Router, private route : ActivatedRoute){};

  linkFormComponent(){
    // this.router.navigate(['/reactform']);  // global path
    this.router.navigate(['reactform'], {relativeTo: this.route})  //local path
    //  this.router.navigate(['reactform'], {relativeTo: this.route
  }
  
}
