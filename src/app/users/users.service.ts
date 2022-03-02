import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { GetApiCallService } from '../service/get-api-call.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  constructor(private apiService: GetApiCallService ) { }

  getUsers(endPoint: string): Observable<Iuser[]>{
    return this.apiService.callApi(endPoint) as unknown as Observable<Iuser[]>;
  }
}

export interface Iuser{
  id: number;
  name: string;
  email: string;
}