import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'posts', component: PostsComponent},
]


@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ],
})
export class PostsModule { }
