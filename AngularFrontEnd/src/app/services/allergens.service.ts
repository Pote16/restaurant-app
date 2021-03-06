import { Injectable } from '@angular/core';
import { IAllergensAPI } from '../interfaces/interfacesAPI';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AllergensService {

  private allergensUrl = environment.WEBAPIURL + 'allergens/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'AUTHORIZATION': String(localStorage.getItem("id_token"))
    })
  };


  constructor(
    private http: HttpClient) { }


  /** GET categories from the server */
  getAllergens(): Observable<IAllergensAPI[]> {
    return this.http.get<IAllergensAPI[]>(this.allergensUrl, this.httpOptions).pipe(
      catchError(this.handleError<IAllergensAPI[]>('getAllergens', []))
    );
  }


  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      // console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
