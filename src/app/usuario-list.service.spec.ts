import { TestBed } from '@angular/core/testing';

import { UsuarioListService } from './usuarios.service';

describe('UsuarioListService', () => {
  let service: UsuarioListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
