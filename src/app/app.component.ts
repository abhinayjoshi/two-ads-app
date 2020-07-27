import { Component, OnInit } from '@angular/core';
import { AdvertisementService } from './advertisement.service';
import { AdvertisementModel } from './models/advertisement.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'angular-single-page-website';
  constructor(private adService: AdvertisementService) { }
  ads: AdvertisementModel[];
  adFirst: AdvertisementModel;
  adSecond: AdvertisementModel;

  ngOnInit() {
    this.adService.getAds().subscribe(
      ads => {
        this.ads = ads;
        this.ads.sort(this.comparePrice);
        this.adFirst = ads[0];
        this.adSecond = ads[1];
      }
    );
  }

  comparePrice(ad1, ad2) {
    let comparison = 0;
    const price1: number = ad1.price;
    const price2: number = ad2.price;
    if (price1 > price2) {
      comparison = -1;
    } else if (ad1.price > ad2.price) {
      comparison = 1;
    }
    return comparison;
  }

}
