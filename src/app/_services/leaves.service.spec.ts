/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LeavesService } from './leaves.service';

describe('Service: Leaves', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeavesService]
    });
  });

  it('should ...', inject([LeavesService], (service: LeavesService) => {
    expect(service).toBeTruthy();
  }));
});
