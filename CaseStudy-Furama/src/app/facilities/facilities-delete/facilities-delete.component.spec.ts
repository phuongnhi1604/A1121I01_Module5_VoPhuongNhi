import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilitiesDeleteComponent } from './facilities-delete.component';

describe('FacilitiesDeleteComponent', () => {
  let component: FacilitiesDeleteComponent;
  let fixture: ComponentFixture<FacilitiesDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilitiesDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilitiesDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
