import { Injectable, Inject } from '@angular/core';
import {Producto} from '../Models/producto';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { httpFactory } from '@angular/http/src/http_module';
import { catchError, map, tap, } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private log( varMensaje:string , varId?:string){
    alert('Mensaje de sistema:' + varMensaje);
  }
  constructor(@Inject('BASE_URL') private baseUrl: string, private http: HttpClient) { }

  getProducts(): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.baseUrl + 'api/Producto')
    .pipe(
      catchError(this.handleError<Producto[]>('Error_GetProduct',[]))
    );
  }

  addProduct(newProducto: Producto): Observable<Producto>{
    return this.http.post<Producto>(this.baseUrl + 'api/Producto', newProducto)
    .pipe(
      tap((varProducto: Producto)=> this.log('Producto Agregado', varProducto.referencia)),
      catchError(this.handleError<Producto>('Error_addProduct'))
    );
  }

  getProduct(varId: string):Observable<Producto>{
    return this.http.get<Producto>(this.baseUrl + 'api/Producto/' + varId)
    .pipe(
      catchError(this.handleError<Producto>('Error_getProduct'))
    );
  }

  updateProduct(varId: string, newProducto: Producto): Observable<Producto>{
    return this.http.put<Producto>(this.baseUrl + 'api/Producto/' + varId, newProducto)
    .pipe(
      tap((varProducto: Producto)=> this.log('Producto Actualizado ', varProducto.referencia)),
      catchError(this.handleError<Producto>('Error_updateProduct'))
    );
  }



  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  // Let the app keep running by returning an empty result.
      return of(result as T);
  };
}
}
