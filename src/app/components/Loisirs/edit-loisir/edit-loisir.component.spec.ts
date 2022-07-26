import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLoisirComponent } from './edit-loisir.component';

describe('EditLoisirComponent', () => {
  let component: EditLoisirComponent;
  let fixture: ComponentFixture<EditLoisirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLoisirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLoisirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
