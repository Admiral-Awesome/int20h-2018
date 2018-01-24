import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';

@Injectable()
export class MemesService {
  url = 'http://localhost:8080/api/';

  constructor(private http: Http) {

  }

  static prepareHeaders(): Headers {
    const headers: Headers = new Headers();

    const token = localStorage.getItem('token');

    headers.set("Accept", "application/json");

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  }

  static prepareOptions() {
    return new RequestOptions({
      headers: MemesService.prepareHeaders()
    });
  }

  getMemes() {
    return this.http.get(this.url +"meme/pair", MemesService.prepareOptions());
  }

}
