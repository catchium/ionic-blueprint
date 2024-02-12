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

import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {
      title: 'HOME',
      url: '/home',
      icon: 'home',
      assetUrl: '',
    },
    {
      title: 'SETTINGS',
      url: '/settings',
      icon: 'settings',
      assetUrl: '',
    },
    {
      title: 'PRIVACY_POLICY',
      url: '/contact-privacy',
      icon: 'shield',
      assetUrl: '',
    },
    {
      title: 'LEGAL_NOTICE',
      url: '/legal-notice',
      icon: 'shield',
      assetUrl: '',
    },
  ];
  constructor() {}
}
