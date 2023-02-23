import {Inject, Injectable} from '@angular/core';
import {RoomList} from "../rooms";
import {APP_SERVICE_CONFIG} from "../../AppConfig/appconfig.service";
import {AppConfig} from "../../AppConfig/appconfig.interface";

@Injectable({
  providedIn: 'root'
})
export class RoomService {

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
  constructor(@Inject(APP_SERVICE_CONFIG) private config:AppConfig) {
    console.log(this.config.apiEndpoint);
  }
  getRooms(){
    return this.roomList
  }
}
