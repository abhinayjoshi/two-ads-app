import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementLeftComponent } from './advertisement-left.component';

describe('AdvertisementLeftComponent', () => {
  let component: AdvertisementLeftComponent;
  let fixture: ComponentFixture<AdvertisementLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertisementLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
