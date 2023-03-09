import {Component, ElementRef, Inject, OnInit, Optional, ViewChild} from '@angular/core';
import {RoomsComponent} from "./rooms/rooms.component";
import {LoggerService} from "./logger.service";
import { localStorageToken } from "./localstorage.token";
import {InitService} from "./init.service";
import {ConfigService} from "./services/config.service";
import {NavigationStart, Router} from "@angular/router";
import {filter} from "rxjs";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hotelinvetory';
  @ViewChild('name', {static : true}) name!:  ElementRef


  constructor(
    @Optional() private loggerService: LoggerService,
    @Inject(localStorageToken) private localStorage: any,
    private initService: InitService,
    private configService: ConfigService,
    private router: Router,

    ) {
    console.log(initService)
  }


  ngOnInit() {
    this.localStorage.setItem('name', 'Hilton Hotel');
    this.router.events.pipe(
      filter((event) => event instanceof NavigationStart)
    ).subscribe((event) => {
      console.log(event, 'NavigationStart');
    })
    this.router.events.subscribe((event) =>{
      console.log(event);
    })
  }
  // @ViewChild('user', {read: ViewContainerRef}) vcr!: ViewContainerRef;
  // constructor() {
  // }
  // ngAfterViewInit() {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRom =50;
  // }
}
