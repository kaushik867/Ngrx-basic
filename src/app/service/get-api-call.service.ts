import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetApiCallService {
  private baseUrl = "https://jsonplaceholder.typicode.com";

  constructor(private httpClient: HttpClient) { }

  callApi(endPoint: string):Observable<any>{
    return this.httpClient.get<any>(this.baseUrl+endPoint).pipe(
      catchError((error)=>{
        return throwError(error);
      })
    )
  }
  
}
