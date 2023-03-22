import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumQuestionComponent } from './forum-question.component';

describe('ForumQuestionComponent', () => {
  let component: ForumQuestionComponent;
  let fixture: ComponentFixture<ForumQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForumQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
