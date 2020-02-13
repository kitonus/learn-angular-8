import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  angForm: FormGroup;

  constructor(private fb: FormBuilder, private service: ProductsService, 
    private router: Router) { 
    this.createForm();
  }

  ngOnInit() {
  }

  addProduct(ProductName, ProductDescription, ProductPrice){
    this.service.addProduct(ProductName, ProductDescription, ProductPrice)
      .subscribe(prod => this.router.navigate(['products']));
  }

  createForm() {
    this.angForm = this.fb.group({
      ProductName: ['', Validators.required],
      ProductDescription: ['', Validators.required],
      ProductPrice: ['', Validators.required]
    });
  }
}
