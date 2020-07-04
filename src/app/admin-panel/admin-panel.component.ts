import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from './../services/products.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss'],
})
export class AdminPanelComponent implements OnInit {
  form: FormGroup;
  products = [
    'kuhinje',
    'tv-komode',
    'police',
    'komode',
    'garderoberi-i-ormari',
    'kancelarijski-stolovi',
    'katalog-boja',
    'fiokari-i-nocni-stocici',
    'predsoblja-i-cipelari',
    'klub-i-stolovi-za-rucavanje',
    'kupatilski-namestaj',
    'ostalo'
  ];
  message = false;

  constructor(public productsService: ProductsService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null),
      product: new FormControl(this.products[10], {validators: [Validators.required]}),
      image: new FormControl(null, {validators: [Validators.required]}),
      description: new FormControl(null, {validators: [Validators.required]}),
      price: new FormControl(null, {validators: [Validators.required]}),
    });

  }

  onSaveProduct() {
    if (this.form.invalid) {
      return;
    }
    this.productsService.addProduct (
      this.form.value.title,
      this.form.value.image,
      this.form.value.product,
      this.form.value.description,
      this.form.value.price );

    this.form.reset();
    this.message = true;

    setTimeout(() => {
      this.message = false;
    }, 800);
  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({image: file});
    this.form.get('image').updateValueAndValidity();
    console.log(file);
    // console.log(this.form);
  }

}
