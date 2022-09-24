import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LohangCreateComponent } from './lohang-create.component';

describe('LohangCreateComponent', () => {
  let component: LohangCreateComponent;
  let fixture: ComponentFixture<LohangCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LohangCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LohangCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
