import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionDetailsDTO } from 'src/app/_dto';
import { ForumService } from 'src/app/_services/forum.service';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-forum-question',
  templateUrl: './forum-question.component.html',
  styleUrls: ['./forum-question.component.css']
})
export class ForumQuestionComponent implements OnInit{

  public questionDetails: QuestionDetailsDTO;
  public arrowDown = faArrowDown;
  public arrowUp = faArrowUp;

  constructor(
    private readonly forumService: ForumService,
    private readonly route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.find(
      this.route.snapshot.paramMap.get('id')
    );
  }

  private find(id: string): void {
    this.forumService.find(id).subscribe((res) => {
      this.questionDetails = res;
    });
  }

}
