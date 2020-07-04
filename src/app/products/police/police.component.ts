import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-police',
  template: `<app-product [category]="category" [title]="title"></app-product>`,
  styleUrls: ['../product/product.component.scss']
})
export class PoliceComponent implements OnInit {

  title = 'police';
  category = 'police';

  constructor() { }

  ngOnInit(): void {
  }

}
