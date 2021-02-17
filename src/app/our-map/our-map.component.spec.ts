import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurMapComponent } from './our-map.component';

describe('OurMapComponent', () => {
  let component: OurMapComponent;
  let fixture: ComponentFixture<OurMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
