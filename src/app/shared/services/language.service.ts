/**
 * Copyright 2024 Lars Behrmann (lars.behrmann@behrmann-it.de, www.behrmann-it.de
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Injectable } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Storage } from '@ionic/storage-angular';

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
    this.init();
  }

  async init() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    console.log('Storage create');
    await this.storage.create();
    this.translateService.addLangs(['en', 'de']);
  }

  initAppLanguage() {
    this.storage.get('AppLanguage').then((appLanguage) => {
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
      this.storage.get('AppLanguage').then((appLanguage) => {
        if (!appLanguage) {
          appLanguage = this.getBrowserLanguage();
        }
        resolve(appLanguage);
      });
    });
  }

  getBrowserLanguage(): string {
    // Language should be set during first
    // app initialisation
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
}
