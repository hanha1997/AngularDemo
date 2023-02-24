import {Component, ElementRef, Inject, OnInit, Optional, ViewChild} from '@angular/core';
import {RoomsComponent} from "./rooms/rooms.component";
import {LoggerService} from "./logger.service";
import { localStorageToken } from "./localstorage.token";
import {InitService} from "./init.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hotelinvetory';
  @ViewChild('name', {static : true}) name!:  ElementRef

  ngOnInit() {
    this.name.nativeElement.innerText = "Hilton Hotel";
    this.localStorage.setItem('name', 'Hilton Hotel');
  }
  constructor(
    @Optional() private loggerService: LoggerService,
    @Inject(localStorageToken) private localStorage: any,
    private initService: InitService

    ) {
    console.log(initService)
  }
  // @ViewChild('user', {read: ViewContainerRef}) vcr!: ViewContainerRef;
  // constructor() {
  // }
  // ngAfterViewInit() {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRom =50;
  // }
}
