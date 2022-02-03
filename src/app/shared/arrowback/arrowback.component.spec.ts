import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowbackComponent } from './arrowback.component';

describe('ArrowbackComponent', () => {
  let component: ArrowbackComponent;
  let fixture: ComponentFixture<ArrowbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrowbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrowbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
