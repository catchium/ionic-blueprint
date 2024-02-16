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

/*
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
*/
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
// import { SplashScreen } from "@ionic-native/splash-screen/ngx";
// import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClient, HttpClientModule } from '@angular/common/http'; // Dont't forget to add HttpClientModule also to imports!!!!! otherwise -->  Error: StaticInjectorError(AppModule)[TranslateLoader -> HttpClient]
import { TranslateModule, TranslateLoader } from '@ngx-translate/core'; // Still need @ngx-translate/core@9.1.1
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// Locale
// import { registerLocaleData } from "@angular/common";
// import localeDe from "@angular/common/locales/de";
//import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { Drivers, Storage } from '@ionic/storage';
import { IonicStorageModule } from '@ionic/storage-angular';

// registerLocaleData(localeDe, "de-DE");
//declare var SQL;
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  exports: [FormsModule, ReactiveFormsModule, SharedModule],
  // entryComponents: [],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    //CoreModule,
    SharedModule,
    // ComponentsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage],
    }),
    // IonicStorageModule.forRoot({
    //   name: '__cache',
    //   driverOrder: ['indexeddb', 'websql'],
    // }),
  ],
  providers: [
    // StatusBar,
    // SplashScreen,
    // Camera,
    // FilePath,
    //{ provide: LOCALE_ID, useValue: "de-DE" },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    //{ provide: ImagePicker, useClass: ImagePickerMock },
    // SQLite,
    // SQLitePorter,
    // File,
    // { provide: SQLite, useClass: SQLiteMock },
    // { provide: SQLitePorter, useClass: SQLitePorterMock }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
