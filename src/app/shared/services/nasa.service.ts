import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IAPOD } from '../interfaces/apod.interface';

@Injectable({
  providedIn: 'root',
})
export class NasaService {

  constructor(
    private http: HttpClient,
  ) {
  }

  public getAPOD(): Observable<IAPOD> {
    return this.http.get<IAPOD>('https://api.nasa.gov/planetary/apod', { params: {api_key: 'lgzi2N33JhI0ZBk5gr24kYr9KfxbHgzgIDYWCCFc'} });
  }

}

