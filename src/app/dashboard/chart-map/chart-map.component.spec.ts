import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartMapComponent } from './chart-map.component';

describe('ChartMapComponent', () => {
  let component: ChartMapComponent;
  let fixture: ComponentFixture<ChartMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
