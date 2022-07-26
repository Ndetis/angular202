import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencesListComponent } from './competences-list.component';

describe('CompetencesListComponent', () => {
  let component: CompetencesListComponent;
  let fixture: ComponentFixture<CompetencesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetencesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetencesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
