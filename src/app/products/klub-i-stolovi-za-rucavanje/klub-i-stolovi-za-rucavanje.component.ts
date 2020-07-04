import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-klub-i-stolovi-za-rucavanje',
  template: `<app-product [category]="category" [title]="title"></app-product>`,
  styleUrls: ['../product/product.component.scss']
})
export class KlubIStoloviZaRucavanjeComponent implements OnInit {

  title = 'klub i stolovi za rucavanje';
  category = 'klub-i-stolovi-za-rucavanje';

  constructor() { }

  ngOnInit(): void {
  }

}
