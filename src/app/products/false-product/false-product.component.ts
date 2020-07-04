import { Component, OnInit } from '@angular/core';
import { slideIn } from './../../animations';

@Component({
  selector: 'app-false-product',
  templateUrl: './false-product.component.html',
  styleUrls: ['./false-product.component.scss'],
  animations: [slideIn]
})
export class FalseProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
