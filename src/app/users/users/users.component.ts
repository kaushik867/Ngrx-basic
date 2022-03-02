import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { getUsers, getUsersError, getUsersLoaded, getUsersLoading, RootReducerState } from 'src/app/reducer';
import { GetApiCallService } from 'src/app/service/get-api-call.service';
import { userDelete, userListRequest, userListSuccess, userLoadFailed } from '../Actions/users.action';
import { Iuser, UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  private id: string = '';
  public users:Iuser[] = [];

  constructor(private apiService: UsersService, private store: Store<RootReducerState>) { }

  ngOnInit(): void {

    const loaded = this.store.select(getUsersLoaded);
    const loading = this.store.select(getUsersLoading);
    const userData = this.store.select(getUsers);

    combineLatest([loaded, loading]).subscribe(data=>{
      if(!data[0] && !data[1]){
        this.store.dispatch(new userListRequest())
        this.apiService.getUsers('/users').subscribe(data => {
        this.store.dispatch(new userListSuccess({data}))
        },error =>{
          this.store.dispatch(new userLoadFailed({data: error}))
        });
      }
    });
    
    this.store.select(getUsers).subscribe(data=>{
      this.users = [...data];
    });
  }

  deleteUser(id: number){
    this.store.dispatch(new userDelete({id}));
  }

}

