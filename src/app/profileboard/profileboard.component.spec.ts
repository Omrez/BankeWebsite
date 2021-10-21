import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileboardComponent } from './profileboard.component';

describe('ProfileboardComponent', () => {
  let component: ProfileboardComponent;
  let fixture: ComponentFixture<ProfileboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
