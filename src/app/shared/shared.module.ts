import { NgModule, LOCALE_ID } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LanguageService } from './services/language.service';
import { HttpClient } from '@angular/common/http'; // Dont't forget to add HttpClientModule also to imports!!!!! otherwise -->  Error: StaticInjectorError(AppModule)[TranslateLoader -> HttpClient]
import { TranslateModule, TranslateLoader } from '@ngx-translate/core'; // Still need @ngx-translate/core@9.1.1
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { IonicStorageModule } from '@ionic/storage-angular';
import { Drivers, Storage } from '@ionic/storage';

/**
 * Nicht de-DE nutzen. Auch nicht im Provider. Gibt Probleme
 * mit this.translateService.currentLang siehe z.B. CustomDateProvider.
 */
registerLocaleData(localeDe, 'de');
/**
 * IMPORTANT: ngrx/translate
 * Translate module must also be called with loader factory.
 * https://github.com/ngx-translate/core/issues/574
 */
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

// https://angularfirebase.com/snippets/how-manage-shared-components-in-an-ionic-4-app/
// ionic g component shared/login --export
// https://medium.com/frontend-fun/angular-4-shared-modules-18ac50f24852 (Besser)
@NgModule({
  providers: [
    // Diagnostic,
    // Geolocation,
    LanguageService,
    { provide: LOCALE_ID, useValue: 'de' },
  ],
  imports: [
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage],
    }),
    IonicModule.forRoot(),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  declarations: [],
  exports: [FormsModule, ReactiveFormsModule, TranslateModule],
})
export class SharedModule {}
