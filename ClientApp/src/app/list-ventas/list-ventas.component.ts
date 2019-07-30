import { Component, OnInit } from '@angular/core';
import { Factura } from '../Models/factura';
import {FacturasService} from '../Services/facturas.service';
import {DFactura} from 'src/app/Models/d-factura';
  import { from } from 'rxjs';
@Component({
  selector: 'app-list-ventas',
  templateUrl: './list-ventas.component.html',
  styleUrls: ['./list-ventas.component.css']
})
export class ListVentasComponent implements OnInit {
  listFacturas: Factura[];
  listD: DFactura[] = [];
  constructor(private facturasService: FacturasService) { }

  ngOnInit() {
    this.getVentas();
  }

  getVentas() {
    this.facturasService.getFacturas().subscribe(result => this.listFacturas = result);
    
  }

  
}
