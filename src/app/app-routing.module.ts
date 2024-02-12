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

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    title: 'HOME',
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    title: 'HOME',
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    title: 'SETTINGS',
    path: 'settings',
    loadChildren: () =>
      import('./pages/settings/settings.module').then(
        (m) => m.SettingsPageModule
      ),
  },
  {
    title: 'LEGAL_NOTICE',
    path: 'legal-notice',
    loadChildren: () =>
      import('./pages/legal-notice/legal-notice.module').then(
        (m) => m.LegalNoticePageModule
      ),
  },
  {
    title: 'PRIVACY_POLICY',
    path: 'contact-privacy',
    loadChildren: () =>
      import('./pages/contact-privacy/contact-privacy.module').then(
        (m) => m.ContactPrivacyPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
