import { TestBed } from '@angular/core/testing';

import { Tareas.ServiceService } from './tareas.service.service';

describe('Tareas.ServiceService', () => {
  let service: Tareas.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tareas.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
