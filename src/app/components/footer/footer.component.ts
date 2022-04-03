import { Component } from '@angular/core';
import { faWhatsapp, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  constructor() {}

  wpp = faWhatsapp;
  gh = faGithub;
  user = faAddressCard
  linkedin = faLinkedin

  openUrl(url: string) {
    window.open(url)
  }
}
