import { Component } from '@angular/core';
import { faHtml5, faCss3, faJs  } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor() { }

  html = faHtml5
  css = faCss3
  js = faJs

  setUrl(url: string) {
    localStorage.setItem("page", url)
  }

}
