import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {CursoproviderProvider} from "../../providers/cursoprovider/cursoprovider";
import {InAppBrowser, InAppBrowserOptions} from "@ionic-native/in-app-browser";

/**
 * Generated class for the ListararchivosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listararchivos',
  templateUrl: 'listararchivos.html',
})
export class ListararchivosPage {
  datos;
  loader: any;
  cursos: any;
  recursos: any;
  url: String;

  constructor(private inAppBrowser: InAppBrowser, public navCtrl: NavController, public navParams: NavParams, public provider: CursoproviderProvider, public loadingCtrl: LoadingController) {
    this.datos = navParams.data.cursos;
    this.getRecursos(this.datos.node.title);
  }

  getRecursos(course: string) {
    this.getLoading();
    this.provider.getFiles(course)
      .then(data => {
        this.recursos = data;
        this.loader.dismiss();
        console.log(this.recursos);
      });
  }


  getLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Cargando..."
    });
    this.loader.present();
  }

  /*openLink(url: string) {
    const option: InAppBrowserOptions = {
      zoom: 'no'
    }

    const browser = this.inAppBrowser.create(url, '_self', option);

    //browser.on('').subscribe();

  }*/

}
