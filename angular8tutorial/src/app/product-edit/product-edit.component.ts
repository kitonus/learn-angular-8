import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Product from '../model/Product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  angForm: FormGroup;
  product: Product = {productDescription: null, productName: null, productPrice: 0};

  constructor(private route: ActivatedRoute, private router: Router,
    private service: ProductsService, private fb: FormBuilder) { 
      this.createForm();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.service.getProduct(params['id']).subscribe((res: Product) => {
        this.product = res;
    });
  });    
  }

  private createForm(){
    this.angForm = this.fb.group({
      ProductName: ['', Validators.required ],
      ProductDescription: ['', Validators.required ],
      ProductPrice: ['', Validators.required ]
    });
  }

  updateProduct(name: string, description: string, price: number){
    this.route.params.subscribe(params => {
      this.service.updateProduct(params.id, description, price)
        .subscribe( prod => this.router.navigate(['products']));
    })
    
  }
}
