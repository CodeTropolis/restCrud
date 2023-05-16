import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
//  products$: BehaviorSubject<any> = new BehaviorSubject<any>(null)

  constructor(){}
    
    getAllProducts() {
      //this.products$ = this.apiService.getAllProducts().subscribe(products => {
      //  products.forEach(product => {
      //    console.log(product)
      //  })
      //})
     //this.apiService.getAllProducts().subscribe(data => {
     //   data.products.forEach((product:any) => {
     //     console.log(product)
     //   })
     //}) 
    } 

    
}


