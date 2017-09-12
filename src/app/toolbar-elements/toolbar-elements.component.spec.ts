import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarElementsComponent } from './toolbar-elements.component';

describe('ToolbarElementsComponent', () => {
  let component: ToolbarElementsComponent;
  let fixture: ComponentFixture<ToolbarElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
