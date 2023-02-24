import {
  ChangeDetectionStrategy,
  Component, DoCheck,
  EventEmitter,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {RoomList} from "../rooms";

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomListComponent implements OnInit, OnChanges, OnDestroy {

  @Input() rooms: RoomList[] | null = [] ;
  @Input() title: String = '';
  @Output() selectedRoom = new EventEmitter<RoomList>();
  constructor() {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('detry call')
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if (changes['title']) {
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room)
  }
}
