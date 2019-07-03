import { scheduleMicroTask } from "@angular/core/src/util";

export class Schedules {
  constructor(
    public portOfLoading: string,
    public portOfDischarge: string,
    public containerType: string
  ) {}
}
let mySchedules = new Schedules("Chennai", "Gdansk", "20'");
console.log(
  "My schedule:  " + mySchedules.portOfLoading,
  "- " + mySchedules.portOfDischarge
); // "My hero is called SkyDog"
