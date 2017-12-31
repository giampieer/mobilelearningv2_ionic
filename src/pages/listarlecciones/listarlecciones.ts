import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {CursoproviderProvider} from "../../providers/cursoprovider/cursoprovider";

/**
 * Generated class for the ListarleccionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listarlecciones',
  templateUrl: 'listarlecciones.html',
})
export class ListarleccionesPage {
  loader: any;
  datos;
  lecciones: any;
  cursos: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public provider: CursoproviderProvider, public loadingCtrl: LoadingController) {
    this.datos = navParams.data.cursos;
    this.getLecciones(this.datos.node.Nid);
  }

  getLecciones(id: string) {
    this.getLoading();
    this.provider.getLessons(id)
      .then(data => {
        this.lecciones = data;
        this.loader.dismiss();
        console.log(this.lecciones);
      });
  }

  getLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Cargando..."
    });
    this.loader.present();
  }

}
