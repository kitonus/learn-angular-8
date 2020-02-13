import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Product from './model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  uri = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  addProduct(productName: string, productDescription: string, productPrice: number){
    const obj: Product = {
      productName, 
      productDescription, 
      productPrice
    }

    console.log(obj);
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    return this.http.post(`${this.uri}/product`,  obj, {headers: headers})
  }

  updateProduct(productName: string, productDescription: string, 
        productPrice: number){
    return this.addProduct(productName, productDescription, productPrice)
  }

  getProducts() {
    return this
           .http
           .get(`${this.uri}/product`);
  }

  getProduct(name: string) {
    return this
           .http
           .get(`${this.uri}/product/${name}`);
  }

  deleteProduct(name: string){
    const headers = new HttpHeaders({'accept':'*/*'});
    return this
           .http
           .delete(`${this.uri}/product/${name}`, {headers: headers});

  }
}
