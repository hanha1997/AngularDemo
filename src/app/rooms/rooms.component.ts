import {Component, OnInit} from '@angular/core';
import {Room, RoomList} from "./rooms";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit{
  hotelName= 'Angular Hotel';
  numberOfRom = 10;
  hideRoom = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomList: RoomList[] = [
    {
      roomNumber:1,
      roomType: 'Duluxe',
      amenities:'Air Conditioner',
      price: 500,
      photos: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA9jyeynlFwVGBRreQHauSuqrkhoKGk7ytIw8OpgZbNA&s',
      checkinTime: new  Date('11-nov-2021'),
      checkoutTime: new  Date('12-nov-2021'),
      rating:2.502
    },
    {
      roomNumber:2,
      roomType: 'Private Room',
      amenities:'Air Conditioner',
      price: 5000,
      photos: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA9jyeynlFwVGBRreQHauSuqrkhoKGk7ytIw8OpgZbNA&s',
      checkinTime: new  Date('13-nov-2021'),
      checkoutTime: new  Date('14-nov-2021'),
      rating:4.6

    },
    {
      roomNumber:3,
      roomType: 'Vips Room',
      amenities:'Air Conditioner',
      price: 10000,
      photos: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA9jyeynlFwVGBRreQHauSuqrkhoKGk7ytIw8OpgZbNA&s',
      checkinTime: new  Date('14-nov-2021'),
      checkoutTime: new  Date('15-nov-2021'),
      rating:2.6

    },
  ]
  toggle() {
    this.hideRoom = !this.hideRoom
  }
  ngOnInit() {
  }
}
