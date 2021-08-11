import { TestBed } from '@angular/core/testing';

import { IncluirmotoristaService } from './incluirmotorista.service';

describe('IncluirmotoristaService', () => {
  let service: IncluirmotoristaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncluirmotoristaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
