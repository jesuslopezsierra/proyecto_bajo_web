import { Injectable, Inject } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import {Factura} from '../Models/factura';
@Injectable({
  providedIn: 'root'
})
export class FacturasService {

  private log( varMensaje: string) {
    alert('Mensaje de sistema:' + varMensaje);
  }
  constructor(@Inject('BASE_URL') private baseUrl: string, private http: HttpClient) { }

  getFacturas(): Observable<Factura[]>{
    return this.http.get<Factura[]>(this.baseUrl + 'api/Factura')
    .pipe(
      catchError(this.handleError<Factura[]>('Facturas_GetFacturas', []) )
    );
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: HttpErrorResponse): Observable<T> => {
  // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.status}`);
  // Let the app keep running by returning an empty result.
      return of(result as T);
  };
}
}
