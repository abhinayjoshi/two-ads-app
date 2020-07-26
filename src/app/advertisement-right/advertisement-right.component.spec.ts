import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementRightComponent } from './advertisement-right.component';

describe('AdvertisementRightComponent', () => {
  let component: AdvertisementRightComponent;
  let fixture: ComponentFixture<AdvertisementRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertisementRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
