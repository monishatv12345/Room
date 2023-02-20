import { Injectable } from '@angular/core';
import { Room } from './room';

@Injectable({
  providedIn: 'root'
})
export class RoomOperationsService {

  constructor() { }
  
  roomArr:Room[] = [];


  addRoom(roomFromUser:Room)
  {
    
    this.roomArr.push(roomFromUser); 
    console.log("Inside Room Service : Room Added "+roomFromUser.roomId);
    console.log(" Total Room Are :- "+this.roomArr.length);
    
  }

  getRoomArr():Room[]
  {
    return this.roomArr;
  }

  getRoomByCategory(filterCategory:string):Room[]
  {
    
   let outputArr:Room[] = [];

    this.roomArr.forEach(r=>{
      if(r.category == filterCategory)
      {
        outputArr.push(r);
      }
    });

    return outputArr;
  }
}//end class
