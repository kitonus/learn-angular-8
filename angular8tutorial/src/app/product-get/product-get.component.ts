import { Component, OnInit } from '@angular/core';
import Product from '../model/Product';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-get',
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.css']
})
export class ProductGetComponent implements OnInit {

  products: Product[];
  constructor(private service: ProductsService) { }

  ngOnInit() {
    this.service.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }

  deleteProduct(name: string){
    this.service.deleteProduct(name)
      .subscribe(() => {
        this.service.getProducts().subscribe(
          (prod: Product[]) => {
            this.products = prod;
          }
        );
      })
  }
}
