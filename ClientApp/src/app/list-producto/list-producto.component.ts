import { Component, OnInit } from '@angular/core';
import {Producto} from '../Models/producto';
import {ProductoService} from '../Services/producto.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-list-producto',
  templateUrl: './list-producto.component.html',
  styleUrls: ['./list-producto.component.css']
})
export class ListProductoComponent implements OnInit {
  varProducto: Producto[];
  constructor(private productoService: ProductoService, private locaiton:Location) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct(){
    this.productoService.getProducts().subscribe(productos => this.varProducto = productos);
    
  }

}
