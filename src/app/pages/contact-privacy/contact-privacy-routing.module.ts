import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactPrivacyPage } from './contact-privacy.page';

const routes: Routes = [
  {
    path: '',
    component: ContactPrivacyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactPrivacyPageRoutingModule {}
