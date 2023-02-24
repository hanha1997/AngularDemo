import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
  QueryList,
  SkipSelf,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {Room, RoomList} from "./rooms";
import {HeaderComponent} from "../header/header.component";
import {RoomService} from "./services/room.service";
import {Observable} from "rxjs";
import {HttpEventType} from "@angular/common/http";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {
  hotelName= 'Angular Hotel';
  numberOfRom = 10;
  hideRoom = true;

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

  totalBytes = 0;
  constructor(@SkipSelf() private roomService: RoomService) {
  }
  stream = new Observable<string>(observer => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete();
  })
  ngOnInit() {
    this.roomService.getPhotos().subscribe((event) => {
      switch (event.type) {
        case HttpEventType.Sent: {
          console.log('request has been made');
          break;
        } case HttpEventType.ResponseHeader: {
          console.log('request success');
          break;
        }
        case HttpEventType.DownloadProgress: {
          this.totalBytes += event.loaded;
          break;
        }
        case HttpEventType.Response: {
          console.log(event.body);
        }
      }
    })
    this.stream.subscribe({
      next: (value => console.log(value)),
      complete:() => console.log('complete'),
      error:(err) => console.log(err),
    })
    this.stream.subscribe((data) => console.log(data));
    this.roomService.getRooms().subscribe(rooms => {
      this.roomList = rooms;
    })

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
      // roomNumber: '4',
      roomType: 'Duluxe2',
      amenities:'Air Conditioner, 123',
      price: 900,
      photos: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA9jyeynlFwVGBRreQHauSuqrkhoKGk7ytIw8OpgZbNA&s',
      checkinTime: new  Date('11-nov-2021'),
      checkoutTime: new  Date('12-nov-2021'),
      rating:5.02
    }
    // this.roomList.push(room)
    // this.roomList = [...this.roomList, room]
    this.roomService.addRooms(room).subscribe((data) => {
      this.roomList = data;
    })
  }

  editRoom() {
    const room: RoomList= {
      roomNumber: '3',
      roomType: 'Duluxe9992',
      amenities:'Air Conditioner 00900',
      price: 400,
      photos: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA9jyeynlFwVGBRreQHauSuqrkhoKGk7ytIw8OpgZbNA&s',
      checkinTime: new  Date('11-nov-2021'),
      checkoutTime: new  Date('12-nov-2022'),
      rating:3.5
    }
    this.roomService.editRooms(room).subscribe(data => {
      this.roomList = data;
    })
  }

  deleteRoom() {
    this.roomService.deletedRooms('3').subscribe((data) => {
      this.roomList = data;
    })
  }


}
