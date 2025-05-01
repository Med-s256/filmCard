export class FilmSnap {
  location?: string;
  constructor(
    public title: string,
    public description: string,
    public url: string,
    public createdAt: Date,
    public snaps: number
  ) {}
  onSnap() {
    this.snaps++;
  }
  unSnap() {
    this.snaps--;
  }
  setLocation(location: string): void{
    this.location= location;
  }
}
