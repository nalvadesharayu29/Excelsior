/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DivyankaFabricsComponent } from './divyanka-fabrics.component';

describe('DivyankaFabricsComponent', () => {
  let component: DivyankaFabricsComponent;
  let fixture: ComponentFixture<DivyankaFabricsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivyankaFabricsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivyankaFabricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
