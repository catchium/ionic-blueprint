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
