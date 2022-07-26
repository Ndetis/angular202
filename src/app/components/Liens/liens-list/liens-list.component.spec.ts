import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiensListComponent } from './liens-list.component';

describe('LiensListComponent', () => {
  let component: LiensListComponent;
  let fixture: ComponentFixture<LiensListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiensListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiensListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
