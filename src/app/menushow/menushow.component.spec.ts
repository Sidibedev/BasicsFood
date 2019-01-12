import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenushowComponent } from './menushow.component';

describe('MenushowComponent', () => {
  let component: MenushowComponent;
  let fixture: ComponentFixture<MenushowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenushowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenushowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
