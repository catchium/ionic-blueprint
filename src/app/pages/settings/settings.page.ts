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
    this.storage.get('AppLanguageV1').then((appLanguage) => {
      if (appLanguage == null) {
        this.currentLanguage = this.languageService.getBrowserLanguage();
      } else {
        this.currentLanguage = appLanguage;
      }
      window['appLocale'] = appLanguage;
    });
  }

  ngOnInit() {}

  ionViewWillEnter() {
    // this.settingsService
    //   .findAll()
    //   .then((data) => {
    //     console.log('Settings loaded ', data);
    //     this.settings = data;
    //   })
    //   .catch((error) => {
    //     console.log('Error loading settings! ', error);
    //     alert('Error loading settings! ' + error);
    //   });
  }

  switchLanguage() {
    console.log('Current language' + this.currentLanguage);
    if (this.currentLanguage != this.lang) {
      this.storage.set('AppLanguageV1', this.lang);
      //this.translateService.setDefaultLang(this.lang);
      this.translateService.use(this.lang);
      // let setting = this.settings.get(SettingKeys.LANGUAGE);
      // setting.val = this.lang;
      // this.settingsService.update(setting).catch((error) => {
      //   alert('Unexpedcted error ' + error);
      // });
      // setTimeout(() => {
      //   window.location.reload();
      // }, 250);
    }
  }
}
