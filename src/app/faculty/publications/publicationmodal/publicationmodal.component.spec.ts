import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationmodalComponent } from './publicationmodal.component';

describe('PublicationmodalComponent', () => {
  let component: PublicationmodalComponent;
  let fixture: ComponentFixture<PublicationmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicationmodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
