import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RoomRoutingModule} from "./room-routing.module";
import {RoomsComponent} from "./rooms.component";
import {RoomListComponent} from "./room-list/room-list.component";
import {RoomsBookingComponent} from "./rooms-booking/rooms-booking.component";
import {RoomAddComponent} from "./room-add/room-add.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HeaderModule} from "../header/header.module";
import {RouteConfigToken} from "../services/routeConfig.service";
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [
    RoomsComponent,
    RoomListComponent,
    RoomsBookingComponent,
    RoomAddComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    RoomRoutingModule,
    FormsModule,
    HeaderModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide:RouteConfigToken,
      useValue:{title: 'Room'}
    }
  ]
})
export class RoomsModule { }
