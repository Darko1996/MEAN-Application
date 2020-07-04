import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-predsoblja-i-cipelari',
  template: `<app-product [category]="category" [title]="title"></app-product>`,
  styleUrls: ['../product/product.component.scss']
})
export class PredsobljaICipelariComponent implements OnInit {

  title = 'predsoblja i cipelari';
  category = 'predsoblja-i-cipelari';

  constructor() { }

  ngOnInit(): void {
  }

}
