import { snapType } from "./snap-type.type";

export class FilmSnap {
  location?: string;
  id!: string;
  constructor(
    public title: string,
    public description: string,
    public url: string,
    public createdAt: Date,
    public snaps: number
  ) {
    this.id= crypto.randomUUID().substring(0, 8);
  }

  snapAction(snapType: snapType){
    if(snapType=== 'snap'){
      this.onSnap();

    }
    if(snapType === 'unsnap'){
      this.unSnap();
    }
  }
  onSnap() {
    this.snaps++;
  }
  unSnap() {
    this.snaps--;
  }
  
  withLocation(location: string): FilmSnap{
    this.location = location;
    return this;
  }
}
