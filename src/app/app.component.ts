import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Minificador-de-Codigo';

  inicial = localStorage.getItem('page');

  constructor(private _route: Router) {}

  ngOnInit(): void {
    if (this.inicial === null) {
      this.navigate('/html-minifier');
    } else {
      this.navigate(this.inicial);
    }
  }

  navigate(url: string) {
    this._route.navigate([url]);
  }
}
