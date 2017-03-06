/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChartNormalComponent } from './chart-normal.component';

describe('ChartComponent', () => {
  let component: ChartNormalComponent;
  let fixture: ComponentFixture<ChartNormalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartNormalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
