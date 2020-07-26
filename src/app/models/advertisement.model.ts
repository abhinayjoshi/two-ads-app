export class AdvertisementModel implements Deserializable {

  id: string;
  imgUrl: string;
  price: string;
  navLink: string;
  constructor() { }

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}

export interface Deserializable {
  deserialize(input: any): this;
}

