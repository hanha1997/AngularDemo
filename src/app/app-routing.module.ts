import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeComponent} from "./employee/employee.component";
import {RoomsComponent} from "./rooms/rooms.component";
import {ContainerComponent} from "./container/container.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {RoomsBookingComponent} from "./rooms/rooms-booking/rooms-booking.component";
import {RoomAddComponent} from "./rooms/room-add/room-add.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {
    path: 'employee', component: EmployeeComponent
  },
  {
    path: 'rooms/add', component: RoomAddComponent,
  },
  {
    path: 'rooms', component: RoomsComponent,
  },
  {
    path: 'login', component: LoginComponent,
  },
  {
    path:'rooms/:roomId', component: RoomsBookingComponent
  },
  {
    path: '', redirectTo:'/login', pathMatch: 'full'
  },
  {
    path: '**', component: NotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
