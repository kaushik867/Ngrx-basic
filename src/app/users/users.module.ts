import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path:'users', component: UsersComponent},
]

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ],
})
export class UsersModule { }
