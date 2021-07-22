import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoDetailComponent } from './vehiculo-detail.component';

describe('VehiculoDetailComponent', () => {
  let component: VehiculoDetailComponent;
  let fixture: ComponentFixture<VehiculoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
