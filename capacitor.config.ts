/*
 * File: capacitor.config.ts
 * Project: blueprint
 * File Created: Sunday, 4th February 2024
 * Author: Lars Behrmann (larsbehrmann@behrmann-it.de)
 * -----
 * Last Modified: Sunday, 11th February 2024
 * Modified By: Lars Behrmann (larsbehrmann@behrmann-it.de)
 * -----
 * Copyright 2024 <<larsbehrmann@behrmann-it.de>>, www.behrmann-it.de
 * Licensed under the Apache License, Version 2.0 (the
 * );
 * you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.app.lars3',
  appName: 'blueprint',
  webDir: 'www',
  server: {
    androidScheme: 'https',
  },
};

export default config;
