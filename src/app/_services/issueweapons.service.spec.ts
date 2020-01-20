/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IssueweaponsService } from './issueweapons.service';

describe('Service: Issueweapons', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IssueweaponsService]
    });
  });

  it('should ...', inject([IssueweaponsService], (service: IssueweaponsService) => {
    expect(service).toBeTruthy();
  }));
});
