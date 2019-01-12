import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutTypePlatComponent } from './ajout-type-plat.component';

describe('AjoutTypePlatComponent', () => {
  let component: AjoutTypePlatComponent;
  let fixture: ComponentFixture<AjoutTypePlatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutTypePlatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutTypePlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
