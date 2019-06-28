export class Employee {
  public id: number;
  public name: string;
  public imageUrl: string;
  public position: string;

  constructor(id: number, name: string, imageUrl: string, position: string) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
    this.position = position;
  }
}
