import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kupatilski-namestaj',
  template: `<app-product [category]="category" [title]="title"></app-product>`,
  styleUrls: ['../product/product.component.scss']
})
export class KupatilskiNamestajComponent implements OnInit {

  title = 'kupatilski namestaj';
  category = 'kupatilski-namestaj';

  constructor() { }

  ngOnInit(): void {
  }

}
