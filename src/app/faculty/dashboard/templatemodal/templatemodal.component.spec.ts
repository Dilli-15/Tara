import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatemodalComponent } from './templatemodal.component';

describe('TemplatemodalComponent', () => {
  let component: TemplatemodalComponent;
  let fixture: ComponentFixture<TemplatemodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatemodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatemodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
