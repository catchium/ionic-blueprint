import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LegalNoticePageRoutingModule } from './legal-notice-routing.module';

import { LegalNoticePage } from './legal-notice.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    LegalNoticePageRoutingModule,
  ],
  declarations: [LegalNoticePage],
})
export class LegalNoticePageModule {}
