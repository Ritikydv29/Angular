import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Injectable } from "@angular/core";
import { Category } from "../Models/Category.Model";
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'https://localhost:7226/api/ProductCategory'; 

  constructor(private http: HttpClient) {}

  GetCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}`);
  }

}