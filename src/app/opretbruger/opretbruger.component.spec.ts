import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpretbrugerComponent } from './opretbruger.component';

describe('OpretbrugerComponent', () => {
  let component: OpretbrugerComponent;
  let fixture: ComponentFixture<OpretbrugerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpretbrugerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpretbrugerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
