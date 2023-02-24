import {Inject, Injectable} from '@angular/core';
import {Room, RoomList} from "../rooms";
import {APP_SERVICE_CONFIG} from "../../AppConfig/appconfig.service";
import {AppConfig} from "../../AppConfig/appconfig.interface";
import {HttpClient, HttpHeaders, HttpRequest} from "@angular/common/http";
import {share, shareReplay} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  roomList: RoomList[] = []
  // headers =  new HttpHeaders({
  //   'token':"1231231pp"
  // });
  constructor(@Inject(APP_SERVICE_CONFIG) private config:AppConfig, private http: HttpClient) {
    console.log(this.config.apiEndpoint);
  }


  getRooms$ = this.http.get<RoomList[]>('/api/rooms').pipe(
    shareReplay(1)
  );
  getRooms(){

    return this.http.get<RoomList[]>('/api/rooms');
  }
  addRooms(room: RoomList){
    return this.http.post<RoomList[]>('/api/rooms', room);
  }
  editRooms(room: RoomList) {
    return this.http.put<RoomList[]>(`api/rooms/${room.roomNumber}`, room)
  }

  deletedRooms(id: string) {
    return this.http.delete<RoomList[]>(`api/rooms/${id}`)
  }

  getPhotos(){
    const request = new HttpRequest('GET', `https://jsonplaceholder.typicode.com/photos`,{
      reportProgress: true,
    })
    return this.http.request(request);
  }
}

