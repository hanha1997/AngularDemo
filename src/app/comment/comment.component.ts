import {Component, OnInit} from '@angular/core';
import {CommentService} from "./comment.service";
import {ActivatedRoute} from "@angular/router";
import {pluck} from "rxjs";
import {map} from "rxjs/operators";
import {Comments} from "./comments";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit{

  constructor(private commentService: CommentService, private activatedRoute: ActivatedRoute) {
  }
  comments: Comments[] = [];
  comments$ = this.commentService.getComments();
  comment$ = this.activatedRoute.data.pipe(pluck('comments'));
  ngOnInit() {
    this.activatedRoute.data.subscribe((data) => {
      this.comments = data['comments']
    });
  }
}
