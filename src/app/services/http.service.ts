import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { List } from "src/app/model/list";
import { environment } from "src/environments/environment.dev";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  private readonly api = environment.API;
  private readonly token = environment.token;
  url = "https://api-teste-contato.gavtech.com.br";

  constructor(private http: HttpClient) {}

  getContatos(): Observable<List[]> {
    const getToken = localStorage.getItem("token");
    const parseToken = JSON.parse(getToken || "{}");
    const headers = new HttpHeaders({
      Authorization: `Bearer ${parseToken.token}`,
    });
    const apiUrl = `${this.api}/api/Contatos/getContatos`;
    return this.http.get<List[]>(apiUrl, { headers: headers });
  }

  getContatoById(idContato: number): Observable<List> {
    const getToken = localStorage.getItem("token");
    const parseToken = JSON.parse(getToken || "{}");
    const headers = new HttpHeaders({
      Authorization: `Bearer ${parseToken.token}`,
    });
    const apiUrl = `${this.api}/api/Contatos/GetContatoById?idContato=${idContato}`;
    return this.http.get<List>(apiUrl, { headers: headers });
  }

  postCreateContato(data: List): Observable<List> {
    const getToken = localStorage.getItem("token");
    const parseToken = JSON.parse(getToken || "{}");

    const apiUrl = `${this.api}/api/Contatos/CreateContato`;
    return this.http.post<List>(apiUrl, data, {
      headers: new HttpHeaders({
        "Content-type": "application/json",
        Authorization: `Bearer ${parseToken.token}`,
      }),
    });
  }

  putUpdateContato(data: List): Observable<List> {
    const getToken = localStorage.getItem("token");
    const parseToken = JSON.parse(getToken || "{}");

    const apiUrl = `${this.api}/api/Contatos/UpdateContato`;
    return this.http.put<List>(apiUrl, data, {
      headers: new HttpHeaders({
        "Content-type": "application/json",
        Authorization: `Bearer ${parseToken.token}`,
      }),
    });
  }

  deleteContato(id: number): Observable<List> {
    const getToken = localStorage.getItem("token");
    const parseToken = JSON.parse(getToken || "{}");
    const headers = new HttpHeaders({
      Authorization: `Bearer ${parseToken.token}`,
    });
    const apiUrl = `${this.api}/api/Contatos/DeleteContato?idContato=${id}`;
    return this.http.delete<List>(apiUrl, { headers: headers });
  }
}
