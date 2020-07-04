import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kancelarijski-stolovi',
  template: `<app-product [category]="category" [title]="title"></app-product>`,
  styleUrls: ['../product/product.component.scss']
})
export class KancelarijskiStoloviComponent implements OnInit {

  title = 'kancelarijski stolovi';
  category = 'kancelarijski-stolovi';

  constructor() { }

  ngOnInit(): void {
  }

}
