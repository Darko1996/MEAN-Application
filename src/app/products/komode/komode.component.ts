import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-komode',
  template: `<app-product [category]="category" [title]="title"></app-product>`,
  styleUrls: ['../product/product.component.scss']
})
export class KomodeComponent implements OnInit {

  title = 'komode';
  category = 'komode';

  constructor() { }

  ngOnInit(): void {
  }

}
