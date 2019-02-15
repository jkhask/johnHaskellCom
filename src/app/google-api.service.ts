import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { creds } from './credentials';

@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {

  prefix = 'https://www.googleapis.com/blogger/v3/blogs/';
  blogId = '6006743268037570230';
  apiKey = creds.bloggerApiKey;

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get(`${this.prefix}${this.blogId}/posts?key=${this.apiKey}`)
      .pipe(map((data: any) => {
        for (const post of data.items) {
          if (parseFloat(post.replies.totalItems) > 0) {
            post.comments = this.getComments(post.replies.selfLink);
          }
        }
        return data.items;
      }));
  }

  getComments(link): Observable<any> {
    return this.http.get(`${link}?key=${this.apiKey}`)
      .pipe(map((data: any) => data.items));
  }
}
