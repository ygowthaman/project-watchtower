import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  baseUrl = '/api/story'

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.baseUrl);
  }
}
