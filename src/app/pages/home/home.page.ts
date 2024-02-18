import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/shared/services/language.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(
    private router: Router,
    private storage: Storage,
    private languageService: LanguageService
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.storage.get('AppLanguage').then((appLanguage) => {
      if (!appLanguage) {
        // Onboarding not completed
        this.router.navigate(['/on-boarding']);
      } else {
        let language = this.languageService.initAppLanguage();
      }
    });
  }
}
