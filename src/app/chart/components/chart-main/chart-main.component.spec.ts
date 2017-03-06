import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartMainComponent } from './chart-main.component';

describe('ChartMainComponent', () => {
  let component: ChartMainComponent;
  let fixture: ComponentFixture<ChartMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
