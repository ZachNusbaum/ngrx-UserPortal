import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipcodeCacheComponent } from './zipcode-cache.component';

describe('ZipcodeCacheComponent', () => {
  let component: ZipcodeCacheComponent;
  let fixture: ComponentFixture<ZipcodeCacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZipcodeCacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipcodeCacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
