import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransalteService {

  first:string = ''
  second:string = ''

  constructor(private http:HttpClient) {
  }

  translate(first:string){
    const headers = new HttpHeaders({
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': 'f4620064b9mshdb8d1bb25f138ebp15508ajsn932fd197513a',
      'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
    });
    const body = new URLSearchParams({
      q: first,
      target: 'en',
      source: 'it',
    }).toString();
    return this.http.post('https://google-translate1.p.rapidapi.com/language/translate/v2', body , {
      headers
    });
  }
}
