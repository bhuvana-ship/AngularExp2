import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhuvanaComponentComponent } from './bhuvana-component.component';

describe('BhuvanaComponentComponent', () => {
  let component: BhuvanaComponentComponent;
  let fixture: ComponentFixture<BhuvanaComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhuvanaComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhuvanaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
