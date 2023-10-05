import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransalteService {

  first:string = ''
  second:string = ''

  headers = new HttpHeaders();
  params = new URLSearchParams({
		q: '',
		target: 'en',
		source: 'it'
	})

  constructor(private http:HttpClient) {
    this.setHeaders()
  }

  setHeaders(){
    this.headers = this.headers.set('X-RapidAPI-Host', 'google-translate1.p.rapidapi.com')
                               .set('X-RapidAPI-Key', 'f4620064b9mshdb8d1bb25f138ebp15508ajsn932fd197513a');
  }

  setParams(first:string){
    return this.params.set('q', first )
  }

  translate(first:string){
    return this.http.post('https://google-translate1.p.rapidapi.com/language/translate/v2', this.setParams(first) , {
      headers: this.headers
    });
  }
}
