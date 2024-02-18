import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import { LanguageService } from 'src/app/shared/services/language.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  //public settings: Settings;
  public currentLanguage: any;
  public lang: any;
  public languages: Array<{ locale: string; language: string }>;

  constructor(
    private translateService: TranslateService,
    private languageService: LanguageService,
    //private settingsService: SettingsService,
    private storage: Storage
  ) {
    this.languages = [
      { locale: 'de', language: 'GERMAN' },
      { locale: 'en', language: 'ENGLISH' },
    ];
    this.storage.get('AppLanguage').then((appLanguage) => {
      if (appLanguage == null) {
        this.currentLanguage = this.languageService.getBrowserLanguage();
      } else {
        this.currentLanguage = appLanguage;
      }
      window['appLocale'] = appLanguage;
    });
  }

  ngOnInit() {}

  switchLanguage() {
    console.log('Current language' + this.currentLanguage);
    if (this.currentLanguage != this.lang) {
      this.storage.set('AppLanguage', this.lang);
      this.translateService.use(this.lang);
    }
  }
}
