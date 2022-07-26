import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoisirsListComponent } from './loisirs-list.component';

describe('LoisirsListComponent', () => {
  let component: LoisirsListComponent;
  let fixture: ComponentFixture<LoisirsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoisirsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoisirsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
