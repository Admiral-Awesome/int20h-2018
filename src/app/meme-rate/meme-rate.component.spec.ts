import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemeRateComponent } from './meme-rate.component';

describe('MemeRateComponent', () => {
  let component: MemeRateComponent;
  let fixture: ComponentFixture<MemeRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemeRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemeRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
