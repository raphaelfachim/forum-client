import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NewQuestionDTO, QuestionDetailsDTO, QuestionInfosDTO } from '../_dto';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  private endpoint: string = "http://localhost:8080";

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router,
    ) { }

  public getAllQuestions(): Observable<QuestionInfosDTO[]> {
    return this.http.get<QuestionInfosDTO[]>(`${this.endpoint}/question`);
  }

  public find(id: string): Observable<QuestionDetailsDTO> {
    return this.http.get<QuestionDetailsDTO>(`${this.endpoint}/question/${id}`);
  }

  public voteDown(questionId: string, userId: number) {
    return this.http.put<QuestionDetailsDTO>(`${this.endpoint}/question/down`, 
    {
      questionId: questionId,
      userId: userId,
    }
    );
  }

  public voteUp(questionId: string, userId: number) {
    return this.http.put<QuestionDetailsDTO>(`${this.endpoint}/question/up`, 
    {
      questionId: questionId,
      userId: userId,
    }
    );
  }

  public create(newQuestion: NewQuestionDTO): void {
    this.http.post<QuestionDetailsDTO>(`${this.endpoint}/question`, newQuestion
    ).subscribe((res) => {
      this.router.navigate(['question', {id: res.id}]);
    });
  }
}
