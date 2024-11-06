import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSkierComponent } from './list-skier.component';

describe('ListSkierComponent', () => {
  let component: ListSkierComponent;
  let fixture: ComponentFixture<ListSkierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListSkierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSkierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
