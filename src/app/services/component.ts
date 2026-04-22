import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Cpu {
  name: string;
  socket: string;
}

export interface Motherboard {
  name: string;
  socket: string;
  ramType: string;
}

export interface Ram {
  name: string;
  type: string;
}

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  private apiUrl = 'https://raw.githubusercontent.com/nhrulu-git/components.json/refs/heads/main/components.json';

  constructor(private http: HttpClient) {}

  getCpus(): Observable<Cpu[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(data => data.cpus)
    );
  }

  getMotherboards(): Observable<Motherboard[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(data => data.motherboards)
    );
  }

  getRam(): Observable<Ram[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(data => data.ram)
    );
  }
}