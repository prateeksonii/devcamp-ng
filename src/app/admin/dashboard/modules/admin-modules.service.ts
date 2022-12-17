import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Module } from 'src/app/models/module';
import { environment } from 'src/environments/environment';

export interface ModuleDTO {
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class AdminModulesService {
  baseUrl = `${environment.apiUrl}/api/modules`;

  constructor(private http: HttpClient) {}

  createModule(module: ModuleDTO): Observable<Module> {
    return this.http.post<Module>(this.baseUrl, module);
  }

  getModules(): Observable<Module[]> {
    return this.http.get<Module[]>(this.baseUrl);
  }

  getModuleById(id: number): Observable<Module> {
    return this.http.get<Module>(`${this.baseUrl}/${id}`);
  }
}
