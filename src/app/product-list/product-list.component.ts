import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  products:any = []
  constructor(private apiService: ApiService){}

  getAllProducts() {
     this.apiService.getAllProducts().subscribe(data => {
        data.products.forEach((product:any) => {
          this.products.push(product)
        })
     }) 
  }

}
