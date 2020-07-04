import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fiokari-i-nocni-stocici',
  template: `<app-product [category]="category" [title]="title"></app-product>`,
  styleUrls: ['../product/product.component.scss']
})
export class FiokariINocniStociciComponent implements OnInit {
  title = 'fiokari i nocni stocici';
  category = 'fiokari-i-nocni-stocici';

  constructor() { }

  ngOnInit(): void {
  }

}
