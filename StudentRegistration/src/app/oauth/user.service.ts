import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from "@angular/common/http";
import { stringify } from "@angular/compiler/src/util";
import { IUser } from "./user";
import { Observable, throwError } from "rxjs";
import {catchError} from "rxjs/operators"

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  getUser(): Observable<IUser[]> {
    return this.http
      .get<IUser[]>('http://localhost:3000/users')
      .pipe(catchError(this.handleError));
  }

  addUser(user:IUser):Observable<IUser>{

    return this.http.post<IUser>('http://localhost:3000/users', user, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    });

  }
  handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse instanceof ErrorEvent) {
      console.log('Client Sid error');
    } else {
      console.log('Server Side error');
    }

    return throwError('Please contact admin');
  }
}
