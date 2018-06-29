import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNoneComponent } from './main-none.component';

describe('MainNoneComponent', () => {
  let component: MainNoneComponent;
  let fixture: ComponentFixture<MainNoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainNoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
