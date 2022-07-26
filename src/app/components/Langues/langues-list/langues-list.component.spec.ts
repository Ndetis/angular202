import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguesListComponent } from './langues-list.component';

describe('LanguesListComponent', () => {
  let component: LanguesListComponent;
  let fixture: ComponentFixture<LanguesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
