import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages
import { CssMinifierComponent } from "./pages/css-minifier/css-minifier.component";
import { HtmlMinifierComponent } from "./pages/html-minifier/html-minifier.component";
import { JsMinifierComponent } from "./pages/js-minifier/js-minifier.component";

const routes: Routes = [
    // { path: '', redirectTo: '/css-minifier', pathMatch: 'full' },
    { path: 'css-minifier', component: CssMinifierComponent },
    { path: 'html-minifier', component: HtmlMinifierComponent },
    { path: 'js-minifier', component: JsMinifierComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
