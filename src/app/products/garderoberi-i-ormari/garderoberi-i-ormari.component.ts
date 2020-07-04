import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-garderoberi-i-ormari',
  template: `<app-product [category]="category" [title]="title"></app-product>`,
  styleUrls: ['../product/product.component.scss']
})
export class GarderoberiIOrmariComponent implements OnInit {

  title = 'garderoberi i ormari';
  category = 'garderoberi-i-ormari';

  constructor() { }

  ngOnInit(): void {
  }

}
