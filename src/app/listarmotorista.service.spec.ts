import { TestBed } from '@angular/core/testing';

import { ListarmotoristaService } from './listarmotorista.service';

describe('ListarmotoristaService', () => {
  let service: ListarmotoristaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarmotoristaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
