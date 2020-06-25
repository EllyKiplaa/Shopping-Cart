export class Cart {
  public showDescription: boolean;
  constructor(public id: number,public name: string,public description: string, public price:number){
    this.showDescription=false;
  }
}
