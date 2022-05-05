export class Serie {
  id : number;
  name : string;
  channel: string;
  seasons: number;
  public constructor(id :number,name: string,channel: string, season: number) {
    this.id = id;
    this.channel = channel;
    this.name = name;
    this.seasons = season;
  }
}
