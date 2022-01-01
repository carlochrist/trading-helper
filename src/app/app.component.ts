import { DOCUMENT } from '@angular/common';
import {
  Component,
  HostBinding,
  Inject,
  Renderer2,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { DataService } from './services/data.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state(
        'open',
        style({
          height: '100px',
          opacity: 0.8,
          backgroundColor: 'blue',
        })
      ),
      state('closed', style({})),
      transition('open => closed', [animate('2s')]),
      transition('closed => open', [animate('2s')]),
    ]),
  ],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  // title = 'trading-helper';
  // navToggle = document.querySelector('.nav-toggle');
  // @ViewChild('nav_toggle') navToggle: any;

  navLinks = document.querySelectorAll('.nav__link');

  exchangeRateEURtoUSD?: number;

  // @HostBinding('class.nav-opened')

  menuOpened = false;

  constructor(
    // @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private _dataService: DataService
  ) {
    // setInterval(() => {
    //   console.log(this.navLinks);
    // }, 5000);
  }

  // ngOnInit(): void {
  //   this.renderer.addClass(this.document.body, background: "red");
  // }

  // ngOnDestroy(): void {
  //   this.renderer.removeClass(this.document.body, 'nav-open');
  // }

  // constructor(private _dataService: DataService, private renderer: Renderer2) {
  //   // this.getLatestEURtoUSDExchangeRate()
  //   // this.navToggle?.addEventListener('click', () => {
  //   //   alert.apply('xddd');
  //   //   console.log('lol');
  //   //   document.body.classList.toggle('nav-open');
  //   // });

  //   console.log(document);
  //   console.log(document.body);

  //   // this.renderer.addClass(document.body, 'nav-open');
  // }

  ngOnInit() {
    // this.document.body.classList.add('nav-open');
  }

  toggleHamburger = (event: any) => {
    // console.log(this.navToggle);

    // this.navToggle?.addEventListener('click', () => {
    //   console.log('lol');
    //   document.body.classList.toggle('nav-open');
    // });

    this.navLinks = document.querySelectorAll('.nav__link');

    this.navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
      });
    });

    document.body.classList.toggle('nav-open');

    // console.log('test');
    // console.log(event);
    // console.log(document.body);
    // this.menuOpened = !this.menuOpened;
    // event.target.classList.toggle('nav-open');
    // this.renderer.addClass(document.body, 'nav-open');
    // document.body.classList.toggle('nav-open');
    // document.body.classList.add('.nav-open');
  };

  getLatestExchangeRates() {
    this._dataService.getLatestExchangeRates().subscribe((data) => {
      console.log(data);
    });
  }

  getLatestEURtoUSDExchangeRate() {
    this._dataService.getLatestEURtoUSDExchangeRate().subscribe((data) => {
      this.exchangeRateEURtoUSD = data.result;
    });
  }
}
