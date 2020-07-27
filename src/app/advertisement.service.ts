import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdvertisementModel } from './models/advertisement.model';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {

  url = 'api/getAds';
  countUrl = 'api/countClick';
  getCount = 'api/getAllCount';

  constructor(private http: HttpClient) { }

  getAds(): Observable<AdvertisementModel[]> {
    return this.http.get<AdvertisementModel[]>(this.url).pipe(
      map(data => data.map(data => new AdvertisementModel().deserialize(data))),
      catchError(() => throwError('File not found'))
    );
  }

  countClick(imageId: string): Observable<any> {
    return this.http.get(this.countUrl + '?id=' + imageId);
  }

  getAllCountClick(): Observable<any> {
    return this.http.get(this.getCount);
  }
}
