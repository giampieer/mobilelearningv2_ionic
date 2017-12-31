import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {LoginPage} from '../pages/login/login';
import {ListarcursosPage} from '../pages/listarcursos/listarcursos';
import {ListararchivosPage} from '../pages/listararchivos/listararchivos';
import {ListarleccionesPage} from '../pages/listarlecciones/listarlecciones'

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {CursoproviderProvider} from '../providers/cursoprovider/cursoprovider';

import {HttpClientModule} from '@angular/common/http';
import {InAppBrowser} from '@ionic-native/in-app-browser'

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    ListarcursosPage,
    ListararchivosPage,
    ListarleccionesPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    ListarcursosPage,
    ListararchivosPage,
    ListarleccionesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    InAppBrowser,
    CursoproviderProvider
  ]
})
export class AppModule {
}
