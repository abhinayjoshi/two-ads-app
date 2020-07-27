import { Component, OnInit, Input } from '@angular/core';
import { AdvertisementModel } from '../models/advertisement.model';
import { AdvertisementService } from '../advertisement.service';

@Component({
  selector: 'app-advertisement-left',
  templateUrl: './advertisement-left.component.html',
  styleUrls: ['./advertisement-left.component.scss']
})
export class AdvertisementLeftComponent implements OnInit {

  @Input()
  ad: AdvertisementModel;

  constructor(private adService: AdvertisementService) { }

  ngOnInit() {
  }

  countClick() {
    this.adService.countClick(this.ad.imageId).subscribe(
      data => console.log('Success!')
    );
    window.open(this.ad.redirectionTo, '_blank');
  }

}
