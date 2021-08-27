import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getLatestExchangeRates(): Observable<any> {
      return this.httpClient.get("https://api.exchangerate.host/latest")
  }

  getLatestEURtoUSDExchangeRate(): Observable<any> {
    return this.httpClient.get("https://api.exchangerate.host/convert?from=EUR&to=USD")
}
}
