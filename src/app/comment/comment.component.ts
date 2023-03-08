import {Component, OnInit} from '@angular/core';
import {CommentService} from "./comment.service";
import {ActivatedRoute} from "@angular/router";
import {pluck} from "rxjs";
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
  selectedComment = [];
  multipleSelectedComment: string = '';
  comments$ = this.commentService.getComments();
  comment$ = this.activatedRoute.data.pipe(pluck('comments'));
  isChecked:boolean = true;
  minDate= new Date('02/06/2023');
  maxDate= new Date('04/08/2023');
  value = [this.minDate, this.maxDate];
  termsAndCondition(event: any) {
    console.log(event);
  }
  select(event: any) {
    console.log(event);
  }
  ngOnInit() {
    this.activatedRoute.data.subscribe((data) => {
      this.comments = data['comments']
    });
  }
}
