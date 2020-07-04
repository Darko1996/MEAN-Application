import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv-komode',
  template: `<app-product [category]="category" [title]="title"></app-product>`,
  styleUrls: ['../product/product.component.scss']
})
export class TvKomodeComponent implements OnInit {

  title = 'tv komode';
  category = 'tv-komode';

  constructor() { }

  ngOnInit(): void {
  }

}
