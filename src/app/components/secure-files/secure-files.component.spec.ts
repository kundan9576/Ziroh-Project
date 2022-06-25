import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecureFilesComponent } from './secure-files.component';

describe('SecureFilesComponent', () => {
  let component: SecureFilesComponent;
  let fixture: ComponentFixture<SecureFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecureFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecureFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
