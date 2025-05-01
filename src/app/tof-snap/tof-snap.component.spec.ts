import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TofSnapComponent } from './tof-snap.component';

describe('TofSnapComponent', () => {
  let component: TofSnapComponent;
  let fixture: ComponentFixture<TofSnapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TofSnapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TofSnapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
