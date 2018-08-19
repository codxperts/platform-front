import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../entities/user";




@Injectable()
export class AuthService {

    constructor(private http:HttpClient) {

    }

    getToken() {
        console.log(localStorage.getItem('token'));
        return JSON.parse(localStorage.getItem('token'));
    }

    login(email:string, password:string): Observable<any> {
        return this.http.post<any>('/api/auth/login', {email,password});
    }

    getUser(): Observable<any> {
        return this.http.get<any>('/api/status');
    }

}
