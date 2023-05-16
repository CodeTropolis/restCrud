import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  products: any = []
  subscriptions: Subscription[] = []

  constructor(private apiService: ApiService, private router: Router) { }

  getAllProducts() {
    this.subscriptions.push(
      this.apiService.getAllProducts().subscribe(data => {
        data.products.forEach((product: any) => {
          this.products.push(product)
        })
      })
    )
  }

  addProduct() {
    this.router.navigate(['/add-product'])
  }

  updateProduct(product: any) {
    this.subscriptions.push(
      this.apiService.updateProduct(product)
        .subscribe(data => console.log(data)
        )
    )
  }

  deleteProduct(product: any) {
    this.subscriptions.push(this.apiService.deleteProduct(product)
      .subscribe(data => {
        console.log(data)
      })
    )
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe())
  }

}
