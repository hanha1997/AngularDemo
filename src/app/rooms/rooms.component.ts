import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck, OnDestroy,
  OnInit, QueryList, SkipSelf,
  ViewChild, ViewChildren
} from '@angular/core';
import {Room, RoomList} from "./rooms";
import {HeaderComponent} from "../header/header.component";
import {RoomService} from "./services/room.service";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {
  hotelName= 'Angular Hotel';
  numberOfRom = 10;
  hideRoom = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };
  selectedRoom: RoomList | undefined; //selectedRoom!

  roomList: RoomList[] = []
  toggle() {
    this.hideRoom = !this.hideRoom
    this.title = 'Rooms Lists'
  }

  constructor(@SkipSelf() private roomService: RoomService) {
  }
  ngOnInit() {
    this.roomList = this.roomService.getRooms();
  }
  title = 'Room List';
  @ViewChild(HeaderComponent) headerComponent! : HeaderComponent
  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>
  ngAfterViewInit() {
    this.headerComponent.title = 'Rooms View';
    this.headerChildrenComponent.last.title = 'Last Title';
  }
  ngAfterViewChecked() {
  }
  ngDoCheck() {
    console.log('on change call')
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }
  addRoom() {
    const room: RoomList= {
      roomNumber:4,
      roomType: 'Duluxe2',
      amenities:'Air Conditioner, 123',
      price: 900,
      photos: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA9jyeynlFwVGBRreQHauSuqrkhoKGk7ytIw8OpgZbNA&s',
      checkinTime: new  Date('11-nov-2021'),
      checkoutTime: new  Date('12-nov-2021'),
      rating:5.02
    }
    // this.roomList.push(room)
    this.roomList = [...this.roomList, room]
  }
}
