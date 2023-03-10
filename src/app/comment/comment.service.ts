import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Comments} from "./comments";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) {
  }
  getComments() {
    return this.http.get<Comments[]>(`https://jsonplaceholder.typicode.com/comments`)
  }

  getQueryComments(q: string) {
    return this.http.get<Comments[]>(`https://jsonplaceholder.typicode.com/comments?email=${q}`)
  }
}
