export class Room {
    roomId:number;
  roomName:string;
  type:string;
  category:string;
  imageName:string;
  price:number

    

    constructor(
        roomId:number,
  roomName:string,
  type:string,
  category:string,
  imageName:string,
  price:number
    )
    {
          this.roomId = roomId;
          this.roomName = roomName;
          this.type = type;
          this.category = category;
          this.imageName = imageName;
          this.price = price;
    }
}//end of class