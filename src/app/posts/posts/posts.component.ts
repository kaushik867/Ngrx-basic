import { Component, OnInit } from '@angular/core';
import { Ipost, PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
public posts: Ipost[] = [];
  constructor(private postService: PostsService) { }

  ngOnInit(): void {
    this.postService.getPosts('/posts').subscribe(data => {
      this.posts = [...data];
    });
  }

}
