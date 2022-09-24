import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LohangListComponent } from './lohang-list.component';

describe('LohangListComponent', () => {
  let component: LohangListComponent;
  let fixture: ComponentFixture<LohangListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LohangListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LohangListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
