import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Feedback} from './feedback.model';


@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private readonly API_URL_USER = 'http://localhost:8085/feedback/';
  private readonly API_URL_ADMIN = 'http://localhost:8085/admin/feedbacks/';
  formData: Feedback;
  list: Feedback[];
  constructor(private http: HttpClient) {
  }

  getList() {
    this.http.get(this.API_URL_ADMIN).toPromise().then(res => this.list = res as Feedback[]);
  }

  deleteFeedback(id: number) {
    return this.http.delete(this.API_URL_ADMIN + id);
  }
  createFeedback(feedback: Partial<Feedback>): Observable<Feedback> {
    return this.http.post<Feedback>(this.API_URL_USER, feedback);
  }

}
