import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionInfosDTO } from 'src/app/_dto';
import { ForumService } from 'src/app/_services/forum.service';

@Component({
  selector: 'app-forum-main',
  templateUrl: './forum-main.component.html',
  styleUrls: ['./forum-main.component.css']
})
export class ForumMainComponent implements OnInit{

  public questions: QuestionInfosDTO[] = [];

  constructor(
    private readonly forumService: ForumService,
    private readonly router: Router
    ){ }

  ngOnInit(): void {
    this.forumService.getAllQuestions().subscribe((res) => {
      this.questions = res;
    });
  }

  public goToQuestion(questionId: string): void {
    this.router.navigate(['question', {id: questionId}])
  }
}
