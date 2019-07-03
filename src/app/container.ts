export class Container {
  constructor(
    public id: number,
    public containerNumber: string,
    public condition: string,
    public size?: string
  ) {}
}

let myContainer = new Container(18, "numer kontenera", "sound", "20'");
console.log("My container number: " + myContainer.containerNumber); // "My hero is called SkyDog"
