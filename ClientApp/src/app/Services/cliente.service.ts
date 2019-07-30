import { Injectable, Inject } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import {Cliente} from '../Models/cliente';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private log( varMensaje:string){
    alert('Mensaje de sistema:' + varMensaje);
  }

  constructor(@Inject('BASE_URL') private baseUrl: string, private http: HttpClient ) {
   }

   getClientes():Observable<Cliente[]>{
     return this.http.get<Cliente[]>(this.baseUrl + 'api/Cliente')
     .pipe(
      catchError(this.handleError<Cliente[]>('Cliente_getClientes', []))
     );
   }

   addCliente(varCliente: Cliente):Observable<Cliente>{
      return this.http.post<Cliente>(this.baseUrl + 'api/Cliente', varCliente)
      .pipe(
        tap((newCliente:Cliente) => this.log('Cliente Registrado Id /$(newCliente.identificacion)')),
        catchError(this.handleError<Cliente>('Cliente_AddClientes'))
      );
   }

   getCliente(varId:string):Observable<Cliente>{
      return this.http.get<Cliente>(this.baseUrl + 'api/Cliente/' + varId)
      .pipe(
        catchError(this.handleError<Cliente>('Cliente_GetCliente'))
      );
   }

   updateCliente(varId: string,newCliente: Cliente):Observable<Cliente>{
      return this.http.put<Cliente>(this.baseUrl + 'api/Cliente/' + varId, newCliente)
      .pipe(
        tap( _ => this.log('Cliente Actualizado')),
       catchError(this.handleError<Cliente>('Cliente_UpdateClientes'))
      );
   }

   deleteCliente(varId: string): Observable<Cliente>{
     return this.http.delete<Cliente>(this.baseUrl + 'api/Cliente/' + varId)
     .pipe(
      tap( _ => this.log('Cliente Eliminado')),
     catchError(this.handleError<Cliente>('Cliente_DeleteClientes'))
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
