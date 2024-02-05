import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment.dev";
import { Login } from "../model/login";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  private readonly api = environment.API;
  private readonly token = environment.token;

  constructor(private http: HttpClient, private router: Router) {}

  usuarioAutenticado() {
    const getToken = localStorage.getItem("token");
    const parseToken = JSON.parse(getToken || "{}");

    const dataAtual = new Date();
    const dataExpiracao = new Date(parseToken?.expirationDate);

    if (parseToken.token) {
      if (dataExpiracao >= dataAtual) {
        return true;
      }
      localStorage.removeItem("token");
      return false;
    }
    localStorage.removeItem("token");
    return false;
  }

  login(login: string, senha: string): Observable<any> {
    return this.http.get<Login[]>(
      `${this.api}/api/Auth/Login?login=${login}&senha=${senha}`
    );
  }

  verifyToken(): void {
    const getToken = localStorage.getItem("token");
    const parseToken = JSON.parse(getToken || "{}");

    const dataAtual = new Date();
    const dataExpiracao = new Date(parseToken?.expirationDate);

    if (parseToken.token) {
      if (dataExpiracao <= dataAtual) {
        this.router.navigate(["/login"]);
      }
    } else {
      this.router.navigate(["/login"]);
    }
  }

  save() {
    let token = this.token;
    return localStorage.setItem("token", JSON.stringify(token));
  }
}
