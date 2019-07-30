import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsProductoComponent } from './details-producto.component';

describe('DetailsProductoComponent', () => {
  let component: DetailsProductoComponent;
  let fixture: ComponentFixture<DetailsProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
