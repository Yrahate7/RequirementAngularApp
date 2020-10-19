/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProductFetchserviceService } from './product-fetchservice.service';

describe('Service: ProductFetchservice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductFetchserviceService]
    });
  });

  it('should ...', inject([ProductFetchserviceService], (service: ProductFetchserviceService) => {
    expect(service).toBeTruthy();
  }));
});
