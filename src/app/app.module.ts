import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFilm, faFish } from '@fortawesome/free-solid-svg-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CssMinifierComponent } from './pages/css-minifier/css-minifier.component';
import { HtmlMinifierComponent } from './pages/html-minifier/html-minifier.component';
import { JsMinifierComponent } from './pages/js-minifier/js-minifier.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CssMinifierComponent,
    HtmlMinifierComponent,
    JsMinifierComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    library.add(faFilm, faFish);
  }
}
