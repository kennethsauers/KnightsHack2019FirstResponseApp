zimport { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatafieldComponent } from './datafield.component';

describe('DatafieldComponent', () => {
  let component: DatafieldComponent;
  let fixture: ComponentFixture<DatafieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatafieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatafieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
