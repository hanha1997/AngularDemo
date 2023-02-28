import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RoomRoutingModule} from "./room-routing.module";
import {RoomsComponent} from "./rooms.component";
import {RoomListComponent} from "./room-list/room-list.component";
import {RoomsBookingComponent} from "./rooms-booking/rooms-booking.component";
import {RoomAddComponent} from "./room-add/room-add.component";
import {FormsModule} from "@angular/forms";
import {HeaderModule} from "../header/header.module";
import {RouteConfigToken} from "../services/routeConfig.service";



@NgModule({
  declarations: [
    RoomsComponent,
    RoomListComponent,
    RoomsBookingComponent,
    RoomAddComponent,
  ],
  imports: [
    CommonModule,
    RoomRoutingModule,
    FormsModule,
    HeaderModule
  ],
  providers: [
    {
      provide:RouteConfigToken,
      useValue:{title: 'Room'}
    }
  ]
})
export class RoomsModule { }
