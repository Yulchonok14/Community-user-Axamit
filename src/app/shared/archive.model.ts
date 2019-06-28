import { Speaker } from './speaker.model';
import { Image } from './image.model';

export class Archive {
  public id: number;
  public name: string;
  public date: string;
  public time: string;
  public shortLocation: string;
  public fullLocation: string;
  public description: string;
  public images: Image[];
  public speakers: Speaker[];

  constructor(
      id: number, name: string, shortLocation: string, date: string, time: string, fullLocation: string, description: string,
      images: Image[], speakers: Speaker[]) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.time = time;
    this.shortLocation = shortLocation;
    this.fullLocation = fullLocation;
    this.description = description;
    this.images = images;
    this.speakers = speakers;
  }
}
