import { Component, OnInit } from '@angular/core';
import { GoogleApiService } from '../google-api.service';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { PageEvent } from '@angular/material';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  posts$: Observable<any>;
  numPosts: number;

  // MatPaginator Output
  pageEvent: PageEvent;
  pageIndex = 0;
  pageSize = 5;
  pageSizeOptions: Number[] = [5];
  lowValue = 0;
  highValue = 5;

  constructor(private google: GoogleApiService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.posts$ = this.google.getPosts();
    this.posts$.subscribe(posts => {this.numPosts = posts.length; });
  }

  getPaginatorData(event) {
    console.log(event);
    if (event.pageIndex === this.pageIndex + 1) {
      this.lowValue = this.lowValue + this.pageSize;
      this.highValue = this.highValue + this.pageSize;
    } else if (event.pageIndex === this.pageIndex - 1) {
      this.lowValue = this.lowValue - this.pageSize;
      this.highValue = this.highValue - this.pageSize;
    }
    this.pageIndex = event.pageIndex;
    return event;
  }

}
