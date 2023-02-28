import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {RoomsBookingComponent} from "./rooms-booking/rooms-booking.component";
import {RoomAddComponent} from "./room-add/room-add.component";
import {RoomsComponent} from "./rooms.component";

const routes: Routes =[
  {
    path: '', component: RoomsComponent,
    children:[
      {
        path: 'add', component: RoomAddComponent
      },
      {
        path:':roomId', component: RoomsBookingComponent
      },
    ]
  },

];
@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomRoutingModule { }
