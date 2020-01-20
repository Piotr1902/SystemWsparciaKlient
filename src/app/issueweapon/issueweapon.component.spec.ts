/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IssueweaponComponent } from './issueweapon.component';

describe('IssueweaponComponent', () => {
  let component: IssueweaponComponent;
  let fixture: ComponentFixture<IssueweaponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueweaponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueweaponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
