import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarTareaComponent } from './buscar-tarea.component';

describe('BuscarTareaComponent', () => {
  let component: BuscarTareaComponent;
  let fixture: ComponentFixture<BuscarTareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarTareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
