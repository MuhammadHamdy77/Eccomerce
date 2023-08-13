import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pagination } from '../models/pagination';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenericService {
  headers:any;
  constructor(private _http:HttpClient) {
    
   }

  // Handle request
  private handleError(error: HttpErrorResponse) {   
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
  // Get All Data Of Apis
  getAll(apiRoute:string , params? : HttpParams):Observable<Pagination>{
    return this._http.get<Pagination>(`${environment.baseUrl}${apiRoute}`,{params : params})
    .pipe(
      retry(3),
      catchError(this.handleError)
    )
  }
  // Get Data By Id
  getById(id:number,apiRoute:string):Observable<Pagination>{
    return this._http.get<Pagination>(`${environment.baseUrl}${apiRoute}/${id}`,)
    .pipe(
      retry(3),
      catchError(this.handleError)
    )
  }
  // Get Data By Id
  getByIdQ(apiRoute:string):Observable<Pagination>{
    return this._http.get<Pagination>(`${environment.baseUrl}${apiRoute}`,)
    .pipe(
      retry(3),
      catchError(this.handleError)
    )
  }
  // Add Data To Api
  post(newObject:any,apiRoute:string):Observable<Pagination>{
    return this._http.post<Pagination>(`${environment.baseUrl}${apiRoute}` , newObject,)
    .pipe(
      retry(3),
      catchError(this.handleError)
    )
  }
  // Update Data By Id
  put(newObject:any,apiRoute:string):Observable<Pagination>{
    return this._http.put<Pagination>(`${environment.baseUrl}${apiRoute}` , newObject,)
    .pipe(
      retry(3),
      catchError(this.handleError)
    )
  }
  // Delete Data From Api By Id
  delete(id:number,apiRoute:string):Observable<Pagination>{
    return this._http.delete<Pagination>(`${environment.baseUrl}${apiRoute}/${id}`,)
    .pipe(
      retry(3),
      catchError(this.handleError)
    )
  }
}
