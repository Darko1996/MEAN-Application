import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kuhinje',
  template: `<app-product [category]="category" [title]="title"></app-product>`,
  styleUrls: ['../product/product.component.scss']
})
export class KuhinjeComponent implements OnInit {

  title = 'kuhinje';
  category = 'kuhinje';

  constructor() { }

  ngOnInit(): void {}

}
