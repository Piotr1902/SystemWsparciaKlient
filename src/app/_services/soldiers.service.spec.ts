/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SoldiersService } from './soldiers.service';

describe('Service: Soldiers', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SoldiersService]
    });
  });

  it('should ...', inject([SoldiersService], (service: SoldiersService) => {
    expect(service).toBeTruthy();
  }));
});
