import {Component, OnInit, Self} from '@angular/core';
import {RoomService} from "../rooms/services/room.service";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers:[RoomService]
})
export class EmployeeComponent implements OnInit{

  empName: string = 'John';

  constructor(@Self() private roomService: RoomService) {
  }
  ngOnInit() {
  }
}
