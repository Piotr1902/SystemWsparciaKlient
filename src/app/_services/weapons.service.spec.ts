/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WeaponsService } from './weapons.service';

describe('Service: Weapons', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeaponsService]
    });
  });

  it('should ...', inject([WeaponsService], (service: WeaponsService) => {
    expect(service).toBeTruthy();
  }));
});
