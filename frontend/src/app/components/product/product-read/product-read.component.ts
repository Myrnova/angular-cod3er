
import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ProductReadDataSource } from './product-read-datasource';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Product>;
  dataSource: ProductReadDataSource;  
  products: Product[] = []

  displayedColumns = ['id', 'name', 'price', 'action'];

  constructor(private productService: ProductService) {     
    this.dataSource = new ProductReadDataSource();
   
  }

  ngOnInit(): void {  
    this.productService.read().subscribe(products => {
      this.products = products
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.dataSource.data = this.products;
      this.table.dataSource = this.dataSource;
    })   
  }

}
