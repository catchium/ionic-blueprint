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
// import { Settings } from 'src/app/model/settings';
// import { SettingsService } from 'src/app/repository/settings.service';
// import { SettingKeys } from 'src/app/model/setting';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/shared/services/language.service';
// import { UserProfileRepositoryService } from 'src/app/repository/user-profile-repository.service';
// import { UserProfile } from 'src/app/model/user_profile';

@Component({
  selector: 'app-on-boarding',
  templateUrl: './on-boarding.page.html',
  styleUrls: ['./on-boarding.page.scss'],
})
export class OnBoardingPage implements OnInit {
  public slide = 0;
  public language: any;

  constructor(
    private router: Router,
    private translateService: TranslateService,
    private storage: Storage,
    private languageService: LanguageService
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    const language = this.languageService.getBrowserLanguage();
    if (language != this.language) {
      this.language = this.languageService.getBrowserLanguage();
      this.switchLanguage();
    }
  }

  switchLanguage() {
    console.log('Current language' + this.language);
    this.storage.set('AppLanguage', this.language);
    this.translateService.use(this.language);
  }

  finish() {
    this.router.navigate(['/home/']);
  }
}
