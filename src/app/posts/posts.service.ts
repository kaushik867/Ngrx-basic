import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetApiCallService } from '../service/get-api-call.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private apiService: GetApiCallService) { }

  getPosts(endPoint: string): Observable<Ipost[]>{
    return this.apiService.callApi(endPoint) as unknown as Observable<Ipost[]>;
  }
}

export interface Ipost{
  id: number,
  userId: number,
  title: string,
  body: string,
}