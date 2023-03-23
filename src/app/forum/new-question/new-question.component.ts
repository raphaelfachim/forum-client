import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/_services/login.service';
import { faMailReply } from '@fortawesome/free-solid-svg-icons';
import { ForumService } from 'src/app/_services/forum.service';
import { NewQuestionDTO } from 'src/app/_dto';


@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent {

  public sendIcon = faMailReply;

  public questionForm = new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
  });

  constructor(
    private readonly loginService: LoginService,
    private readonly forumService: ForumService,
    ) { }

  public create(): void {
    let title: string = this.questionForm.value.title;
    let content: string = this.questionForm.value.content;

    if(!title || !content) {
      alert("One or more fields empty!");
      return;
    }
    
    let newQuestion: NewQuestionDTO = {
      userId: this.loginService.user.id,
      title: title,
      content: content,
    }
    console.log(newQuestion);
    
    this.forumService.create(newQuestion);
  }
}
