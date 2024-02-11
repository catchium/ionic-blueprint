# ionic-blueprint

git checkout
cd ionic-blueprint
npm install
npm run build
npm i @capacitor/android @capacitor/ios
npx cap add android
npx cap add ios
npm run build
npx cap sync
npx cap open android

https://capacitorjs.com/docs/guides/splash-screens-and-icons
https://capacitorjs.com/docs/apis/splash-screen

https://ionicframework.com/docs/cli

Using Cordova and Capicitor (Alle update Befehle)
https://capacitorjs.com/docs/v2/cordova/using-cordova-plugins#:~:text=When%20developing%20an%20app%20that,Cordova%20and%20Ionic%20Native%20plugins.

https://ionicframework.com/docs/cli/livereload

Upgrade Capicitor
https://capacitorjs.com/docs/updating/5-0

Copy your Web Assets
When you are ready to run your app natively on a device or in a simulator, copy your built web assets using:
npx cap sync

Update the native project
In some cases, the Capacitor app needs to be updated, such as when installing new plugins.
To install new plugins (including Cordova ones), run:
npm install really-cool-plugin
npx cap update

 Updating Capacitor
To check if there are any new updates to Capacitor itself, run npx cap doctor to print out the current installed dependencies as well view the latest available.
To update Capacitor Core and CLI:
npm install @capacitor/cli@latest
npm install @capacitor/core@latest
To update any or all of the platforms you are using:
npm install @capacitor/ios@latest
npm install @capacitor/android@latest