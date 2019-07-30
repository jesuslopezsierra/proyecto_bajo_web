import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { MenuLeftComponent } from './menu-left/menu-left.component';
import { ListClientesComponent } from './list-clientes/list-clientes.component';
import { HomeComponent } from './home/home.component';
import { AddClienteComponent } from './list-clientes/add-cliente/add-cliente.component';
import { DetailsClienteComponent } from './list-clientes/details-cliente/details-cliente.component';
import { ListProductoComponent } from './list-producto/list-producto.component';
import { DetailsProductoComponent } from './list-producto/details-producto/details-producto.component';
import { AddProductoComponent } from './list-producto/add-producto/add-producto.component';
import { ListVentasComponent } from './list-ventas/list-ventas.component';
import { AddVentasComponent } from './list-ventas/add-ventas/add-ventas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    FetchDataComponent,
    MenuLeftComponent,
    ListClientesComponent,
    HomeComponent,
    AddClienteComponent,
    DetailsClienteComponent,
    ListProductoComponent,
    DetailsProductoComponent,
    AddProductoComponent,
    ListVentasComponent,
    AddVentasComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'fetch-data', component: FetchDataComponent },
      {path: 'list-clientes', component: ListClientesComponent},
      {path: 'add-cliente', component: AddClienteComponent},
      {path: 'details-cliente/:id', component: DetailsClienteComponent},
      {path: 'list-productos', component: ListProductoComponent},
      {path: 'details-producto/:id', component: DetailsProductoComponent},
      {path: 'list-ventas', component: ListVentasComponent},
      {path: 'add-venta', component: AddVentasComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
