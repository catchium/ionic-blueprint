import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactPrivacyPageRoutingModule } from './contact-privacy-routing.module';

import { ContactPrivacyPage } from './contact-privacy.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ContactPrivacyPageRoutingModule,
  ],
  declarations: [ContactPrivacyPage],
})
export class ContactPrivacyPageModule {}
