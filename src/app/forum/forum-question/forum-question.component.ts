import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionDetailsDTO } from 'src/app/_dto';
import { ForumService } from 'src/app/_services/forum.service';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from 'src/app/_services/login.service';
import { User } from 'src/app/_types';

@Component({
  selector: 'app-forum-question',
  templateUrl: './forum-question.component.html',
  styleUrls: ['./forum-question.component.css']
})
export class ForumQuestionComponent implements OnInit{

  public questionDetails: QuestionDetailsDTO;
  public arrowDown = faArrowDown;
  public arrowUp = faArrowUp;
  private questionId: string;
  private user: User;

  constructor(
    private readonly forumService: ForumService,
    private readonly route: ActivatedRoute,
    private readonly loginService: LoginService,
    ) { }

  ngOnInit(): void {
    this.questionId = this.route.snapshot.paramMap.get('id');
    this.find(this.questionId);
    this.setUser();
  }

  private find(id: string): void {
    this.forumService.find(id).subscribe((res) => {
      this.questionDetails = res;
    });
  }

  private setUser(): void {
    this.user = this.loginService.user;
  }

  public voteUp(): void {
    this.forumService.voteUp(this.questionId, this.user.id).subscribe((res) => {
      if(res){
        this.questionDetails = res;
      }
    });
  }

  public voteDown(): void {
    this.forumService.voteDown(this.questionId, this.user.id).subscribe((res) => {
      if(res){
        this.questionDetails = res;
      }
    });
  }

}
