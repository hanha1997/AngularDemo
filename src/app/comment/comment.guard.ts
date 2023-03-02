import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Comments} from "./comments";
import {CommentService} from "./comment.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommentGuard implements Resolve<Comments[]> {
  constructor(private commentService: CommentService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Comments[]> | Promise<Comments[]> | Comments[] {
    return this.commentService.getComments();
  }
}
