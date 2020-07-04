import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-katalog-boja',
  template: `<app-product [category]="category" [title]="title"></app-product>`,
  styleUrls: ['../product/product.component.scss']
})
export class KatalogBojaComponent implements OnInit {

  title = 'katalog boja';
  category = 'katalog-boja';

  constructor() { }

  ngOnInit(): void {
  }

}
