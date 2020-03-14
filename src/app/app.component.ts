import { Component, Pipe, Directive } from '@angular/core';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import {  library } from '@fortawesome/fontawesome-svg-core';
library.add(faBookmark);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App Angular Components';
  faBookmark = faBookmark;
  
}
