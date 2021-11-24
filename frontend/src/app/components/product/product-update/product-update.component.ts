import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../product/product.service';
import { Product } from '../product.model';
@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product = {
    name: '',
    price: 0
  }

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {  
    const id = +this.route.snapshot.paramMap.get('id')!
    if(id)
    this.productService.readById(id).subscribe((product) => {
      this.product = product
    })
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => { 
      this.productService.showMessage('Produto alterado!')
      this.router.navigate(['/products'])
    })
  }

  cancel() {
    this.router.navigate(['/products'])
  }

}
