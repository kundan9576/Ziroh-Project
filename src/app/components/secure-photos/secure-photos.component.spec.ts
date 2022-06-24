import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurePhotosComponent } from './secure-photos.component';

describe('SecurePhotosComponent', () => {
  let component: SecurePhotosComponent;
  let fixture: ComponentFixture<SecurePhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurePhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurePhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
