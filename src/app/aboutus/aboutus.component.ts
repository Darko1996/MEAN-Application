import { Component, OnInit } from '@angular/core';
import { slideIn } from './../animations';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss'],
  animations: [slideIn]
})
export class AboutusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
