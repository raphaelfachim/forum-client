import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionDetailsDTO, QuestionInfosDTO } from '../_dto';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  private endpoint: string = "http://localhost:8080";

  constructor(private readonly http: HttpClient) { }

  public getAllQuestions(): Observable<QuestionInfosDTO[]> {
    return this.http.get<QuestionInfosDTO[]>(`${this.endpoint}/question`);
  }

  public find(id: string): Observable<QuestionDetailsDTO> {
    return this.http.get<QuestionDetailsDTO>(`${this.endpoint}/question/${id}`);
  }
}
