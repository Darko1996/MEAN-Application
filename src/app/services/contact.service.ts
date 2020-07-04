import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Contact } from '../models/contact.model';

const BACKEND_URL = `${environment.apiUrl}/contact`;

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  sendMessage(name: string, email: string, text: string) {
    const msg: Contact = { name, email, text };

    this.http.post(`${BACKEND_URL}`, msg).subscribe(resp => {
      console.log(resp);
    });
  }
}
