import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WysiwygEditorComponent } from './wysiwyg-editor.component';

describe('WysiwygEditorComponent', () => {
  let component: WysiwygEditorComponent;
  let fixture: ComponentFixture<WysiwygEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WysiwygEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WysiwygEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
