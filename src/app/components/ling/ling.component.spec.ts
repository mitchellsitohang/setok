import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LingComponent } from './ling.component';

describe('LingComponent', () => {
  let component: LingComponent;
  let fixture: ComponentFixture<LingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
