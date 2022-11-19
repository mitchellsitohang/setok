import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsTauryComponent } from './items-taury.component';

describe('ItemsTauryComponent', () => {
  let component: ItemsTauryComponent;
  let fixture: ComponentFixture<ItemsTauryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsTauryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsTauryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
