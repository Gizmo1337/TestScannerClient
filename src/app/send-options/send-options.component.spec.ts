import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendOptionsComponent } from './send-options.component';

describe('SendOptionsComponent', () => {
  let component: SendOptionsComponent;
  let fixture: ComponentFixture<SendOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
