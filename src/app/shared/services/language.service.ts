import { Injectable } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Storage } from '@ionic/storage-angular';
//import { resolve } from 'url';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private currentLocales = {
    de: 'de-DE',
    en: 'en-US',
  };

  constructor(
    private translateService: TranslateService,
    private storage: Storage
  ) {
    // console.log('Storage create');
    // this.storage.create();
    this.init();
    // translateService.addLangs(['en', 'de']);
    // translateService.onLangChange.subscribe((event: LangChangeEvent) => {
    //   console.log("onLangChange", event.translations);
    // });
    // translateService.onDefaultLangChange.subscribe((event: LangChangeEvent) => {
    //   console.log("onDefaultLangChange", event.translations);
    // });
  }

  async init() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    console.log('Storage create');
    await this.storage.create();
    this.translateService.addLangs(['en', 'de']);
  }

  /**
   * If lang is null. It will try to use
   * the lang provided by the browser.
   * Default: en-US
   */
  getLocaleByLang(lang: string): string {
    if (!lang) {
      lang = 'de-DE'; // getBrowserLanguage();
    }
    for (var key in this.currentLocales) {
      if (this.currentLocales.hasOwnProperty(key)) {
        return this.currentLocales[key];
      }
    }
    return this.currentLocales.en;
  }

  initAppLanguage() {
    this.storage.get('AppLanguageV1').then((appLanguage) => {
      if (!appLanguage) {
        appLanguage = this.getBrowserLanguage();
      }
      this.translateService.setDefaultLang(appLanguage);
      this.translateService.use(appLanguage);
      //
      window['appLocale'] = appLanguage;
    });
  }

  getAppLanguage(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.storage.get('AppLanguageV1').then((appLanguage) => {
        if (!appLanguage) {
          appLanguage = this.getBrowserLanguage();
        }
        resolve(appLanguage);
      });
    });
  }

  getBrowserLanguage(): string {
    // Language should be set during account
    // registration by the association.
    // And later for free accounts by the accept
    // like this ajax request https://stackoverflow.com/questions/1043339/javascript-for-detecting-browser-language-preference
    //return 'de';
    console.debug('Lang ', window.navigator.language);
    let browserLang = window.navigator.language;
    if (browserLang && browserLang.indexOf('-') > -1) {
      browserLang = browserLang.split('-')[0].toLowerCase();
    }
    if (browserLang) {
      browserLang = browserLang.toLowerCase();
    }
    // Only if its a supported language!
    if (this.currentLocales.hasOwnProperty(browserLang)) {
      return browserLang;
    }
    return 'en';
  }

  getBrowserLanguageAsPath(): string {
    // let browserLang = getBrowserLanguage();
    // if (browserLang && browserLang === 'de') {
    return 'de/de';
    //}
    // let browserLang = window.navigator.language;
    // if (browserLang && browserLang.indexOf('-') > -1) {
    //   return browserLang.replace('-', '/').toLowerCase();
    // }
    // if (browserLang && browserLang === 'de') {
    //   return 'de/de';
    // }
    //return 'en/us';
  }
}
