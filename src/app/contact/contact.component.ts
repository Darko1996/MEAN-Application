import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// map
import * as L from 'leaflet';
import { slideIn } from '../animations';
import { ContactService } from './../services/contact.service';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [slideIn]
})
export class ContactComponent implements OnInit {

  icon = {
    icon: L.icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 0 ],
      iconUrl: '../../assets/img/marker-icon.png',
      shadowUrl: '../../assets/img/marker-shadow.png'
   })
};

  constructor(public contactService: ContactService) {}

  ngOnInit(): void {
    const map = L.map('map', { zoomControl: false }).setView([43.167884, 20.531478], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const marker = L.marker([43.167884, 20.531478], this.icon).addTo(map);
  }

  onContact(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.contactService.sendMessage(form.value.name, form.value.email, form.value.text);
    alert('Uspesno ste poslali poruku.');
    form.reset();
  }

}
