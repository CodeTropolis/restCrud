import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private api = 'https://dummyjson.com'

  constructor(private http: HttpClient) { }

    getAllProducts(): Observable<any>{
      return this.http.get(`${this.api}/products`)
    }
    
    get(id:number) {
      return this.http.get(`${this.api}/products/${id}`)
    }

   addProduct(){
    const httpOptions = { 'Content-Type': 'application/json' }
    const obj = {title: 'The Next Best Thing!'}
    const url = `${this.api}/products/add`
    return this.http.post(url, obj)
   }

   deleteProduct(product:any){
     const id = product.id
     const url = `${this.api}/products/${id}`
     return this.http.delete(url)
   }

}
