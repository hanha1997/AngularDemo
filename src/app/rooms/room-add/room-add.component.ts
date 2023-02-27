import {Component, OnInit} from '@angular/core';
import {RoomList} from "../rooms";
import {RoomService} from "../services/room.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-room-add',
  templateUrl: './room-add.component.html',
  styleUrls: ['./room-add.component.scss']
})
export class RoomAddComponent implements OnInit{

  constructor(private roomService : RoomService) {
  }
  successMessage: string = ''
  room: RoomList = {
    roomType:'',
    amenities:'',
    checkinTime: new Date(),
    checkoutTime: new Date(),
    price:0,
    rating:0,
    photos:'',
  }
  ngOnInit() {
  }

  addRoom(roomsForm: NgForm) {
    this.roomService.addRooms(this.room).subscribe(
      (data) => {
        this.successMessage = 'Room Add SuccessFul ';
        roomsForm.resetForm({
          roomType:'',
          amenities:'',
          checkinTime: new Date(),
          checkoutTime: new Date(),
          price:0,
          rating:0,
          photos:'',
        });
    });
  }
}
