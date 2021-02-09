import { Component, OnInit, ViewChild } from '@angular/core';
import { ColorsService } from '../services/colors.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { faAdjust } from '@fortawesome/free-solid-svg-icons';

export interface Colors {
  color: string;
  hex: string;
  _id;
  code: {
    red: number,
    green: number,
    blue: number,
    alpha: number
  };
};

class TemplateObj implements Colors {
  color: string;
  hex: string;
  _id;
  code: {
    red: number,
    green: number,
    blue: number,
    alpha: number
  };
  constructor(color, red, green, blue, alpha, hex) {
    color;
    hex;
    this.code = {
      red, green, blue, alpha
    };
  };
};

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styles: [`.wrap_loader {
    display: flex;
    position: absolute;
    top: 0;
    width: 100%;
    bottom: 0;
    background-color: rgba(1, 1, 1, 0.2);
    margin: 0 !important;
    min-height: 100px;
    align-items: center;
    justify-content: center;
  }`]

})
export class ColorsComponent implements OnInit {

  @ViewChild('changeForm') changeForm: NgForm;

  faAdjust = faAdjust;
  title: Observable<Object>;
  dataColors: [Colors];
  requestError: string;
  formColor: Colors;
  changeColor: Colors;
  isVisible = false;
  idElement: number;
  positionTop: string;
  nameColor: any;
  visibilitySpinner: boolean = false;

  constructor(private colorsServ: ColorsService) { }

  ngOnInit() {
    this.getColors();
    this.formColor = new TemplateObj('', '', null, null, null, null);
    this.changeColor = new TemplateObj('', '', null, null, null, null);
  };

  getColors() {
    this.visibilitySpinner = true
    this.colorsServ.getItems().subscribe(
      response => {
        this.dataColors = (response.data || response)
        this.visibilitySpinner = false
      },
      error => {
        this.requestError = 'ERROR: ' + error.message;
        this.visibilitySpinner = false
      });
  };
  addColor(form) {
    this.visibilitySpinner = true
    this.colorsServ.addItem(this.formColor).subscribe(response => this.dataColors.push(response));
    form.reset();
    this.getColors()

  };
  removeColor(data) {
    this.visibilitySpinner = true
    this.colorsServ.deleteItem(data).subscribe(response => {
      this.getColors();
      return response;
    });
  };
  openChangeForm(color, ev) {
    this.isVisible = true;
    var obj = ev.target.closest('.gradeX');
    var posX = obj.offsetTop;
    this.positionTop = (posX + obj.offsetHeight) + 'px';
    this.changeColor = JSON.parse(JSON.stringify(color));;
  };
  changeDataColor() {
    this.colorsServ.changeItem(this.changeColor).subscribe(response => {
      this.getColors();
      this.isVisible = false;
      return response;
    })
  };
}
