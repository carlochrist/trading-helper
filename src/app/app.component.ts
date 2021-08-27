import { Component } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'trading-helper';

   exchangeRateEURtoUSD?: number;

  constructor(private _dataService: DataService) {
    // this.getLatestEURtoUSDExchangeRate()
  }

  getLatestExchangeRates() {
    this._dataService.getLatestExchangeRates()
    .subscribe(
      data => {
        console.log(data)
      }
    )
  }

  getLatestEURtoUSDExchangeRate() {
    this._dataService.getLatestEURtoUSDExchangeRate()
    .subscribe(
      data => {
        this.exchangeRateEURtoUSD = data.result
      }
    )
  }



}
