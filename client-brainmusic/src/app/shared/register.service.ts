import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {User} from './user.model';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private readonly API_URL = 'http://localhost:8086/register';

  constructor(private http: HttpClient) {
  }

 createUser(user: Partial<User>): Observable<User> {
    return this.http.post<User>(this.API_URL, user);
  }
}

