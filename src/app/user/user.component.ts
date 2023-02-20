import { Component } from '@angular/core';
import { Room } from '../room';
import { RoomOperationsService } from '../room-operations-service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
   // no need to write @Autowire bcoz service class is already @Injectable
  __roomService:RoomOperationsService; // creating object of Service layer

  
  allRoom : Array<Room> = [];
  watchList : Array<Room> = [];
  watchlistCount:number=0 ;

  priceHighCss:string = "color:crimson";
  priceLowCss:string = "color:rgb(8, 112, 63);font-weight: 700;";
  priceNormalCSS:string = "color:black";

  constructor(roomService:RoomOperationsService)
  {
    this.__roomService = roomService;
    this.allRoom = this.__roomService.getRoomArr();
  }


  

  goForBuy(room:string)
  {
    let roomId = parseInt(room);
    console.log(" code to buy "+roomId+" room");
    
  }

  addWatchlist(room:string)
  {
    let addRoomId = parseInt(room);
    
    this.allRoom.forEach(r=>{
      if(r.roomId == addRoomId)
      {
        this.watchList.push(r);
        
      }
    });
    this.watchlistCount = this.watchList.length;
    console.log(this.watchList);
    
  }

  getFilterData(filterValue:string)
  {
    console.log(" Filter Value "+filterValue);

    this.allRoom = this.__roomService.getRoomByCategory(filterValue);
  }
}//end class
