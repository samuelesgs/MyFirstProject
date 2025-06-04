import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private BASE_URL = "http://localhost:3000";

  constructor(
      private http: HttpClient

    ) { }

    public sendPostRequestComplete(url : string, params : any) {
      return this.http.post<any>(url, params);
    }

    public sendPostRequestNotParams(url : string) {
      return this.http.post<any>(this.BASE_URL+"/"+url, {});
    }

    public sendPostRequest(complementUrl : string, params : any) {
      return this.http.post<any>(this.BASE_URL+"/"+complementUrl, params);
    }

    public sendPutRequest(complementUrl : string, params : any) {
      return this.http.put<any>(this.BASE_URL+"/"+complementUrl, params);
    }

    public sendGetRequest(complementUrl : string) {
      return this.http.get<any>(this.BASE_URL+"/"+complementUrl);
    }

    public sendDeleteRequest(complementUrl : string) {
      return this.http.delete<any>(this.BASE_URL+"/"+complementUrl);
    }
}
