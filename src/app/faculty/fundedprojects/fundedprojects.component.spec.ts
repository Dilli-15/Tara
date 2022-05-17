import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundedprojectsComponent } from './fundedprojects.component';

describe('FundedprojectsComponent', () => {
  let component: FundedprojectsComponent;
  let fixture: ComponentFixture<FundedprojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundedprojectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundedprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
