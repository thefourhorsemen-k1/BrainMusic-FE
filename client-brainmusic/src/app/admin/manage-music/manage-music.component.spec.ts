import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMusicComponent } from './manage-music.component';

describe('ManageMusicComponent', () => {
  let component: ManageMusicComponent;
  let fixture: ComponentFixture<ManageMusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageMusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
