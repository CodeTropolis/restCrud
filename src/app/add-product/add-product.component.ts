import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {

  constructor(private apiService: ApiService){}

  ngOnInit(){
    this.apiService.addProduct().subscribe(data => {
      // Note: This api does not actually add to the DB.
      // We can only get data returned from the operation.
      console.log(data)
    })
  }


}
