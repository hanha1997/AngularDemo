import {AfterContentInit, Component, ContentChild, Host, OnInit} from '@angular/core';
import {EmployeeComponent} from "../employee/employee.component";
import {RoomService} from "../rooms/services/room.service";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  providers:[RoomService]
})
export class ContainerComponent implements OnInit, AfterContentInit{

  @ContentChild(EmployeeComponent) employee!: EmployeeComponent
  constructor(@Host() private roomsService: RoomService) {}

  ngOnInit() {
  }
  ngAfterContentInit() {
    console.log(this.employee)
    this.employee.empName = 'David';
  }

}
