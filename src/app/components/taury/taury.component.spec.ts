import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TauryComponent } from './taury.component';

describe('TauryComponent', () => {
  let component: TauryComponent;
  let fixture: ComponentFixture<TauryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TauryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TauryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
