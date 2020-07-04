import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ostalo',
  template: `<app-product [category]="category" [title]="title"></app-product>`,
  styleUrls: ['../product/product.component.scss']
})
export class OstaloComponent implements OnInit {

  title = 'ostalo';
  category = 'ostalo';

  constructor() { }

  ngOnInit(): void {
  }

}
