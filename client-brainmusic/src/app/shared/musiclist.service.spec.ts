import { TestBed } from '@angular/core/testing';

import { MusiclistService } from './musiclist.service';

describe('MusiclistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MusiclistService = TestBed.get(MusiclistService);
    expect(service).toBeTruthy();
  });
});
