import { Component } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'home',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/baseline-home-24px.svg'));
    iconRegistry.addSvgIcon(
      'person',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/baseline-person-24px.svg'));
  }
}
