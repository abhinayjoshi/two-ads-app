export class AdvertisementModel implements Deserializable {

  imageId: string;
  link: string;
  price: string;
  redirectionTo: string;
  constructor() { }

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}

export interface Deserializable {
  deserialize(input: any): this;
}

