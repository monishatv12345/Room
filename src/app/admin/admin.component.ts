import { Component } from '@angular/core';
import { Room } from '../room';
import { RoomOperationsService } from '../room-operations-service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  __roomService:RoomOperationsService;

  constructor(roomService:RoomOperationsService)
  {
    this.__roomService = roomService;
  }
  readRoom(roomId:string,roomName:string,type:string,category:string,price:string,image:string)
  {
      console.log(roomId+" "+roomName+" "+type+" "+category+" "+price+" "+image);
      let roomFromUser:Room = new Room(parseInt(roomId),roomName,type,category,image,parseInt(price));
      this.__roomService.addRoom(roomFromUser);
  }


}