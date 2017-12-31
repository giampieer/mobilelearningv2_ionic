import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {CursoproviderProvider} from '../../providers/cursoprovider/cursoprovider';
import {ListararchivosPage} from "../listararchivos/listararchivos";
import {ListarleccionesPage} from "../listarlecciones/listarlecciones";
import {HttpHeaders} from "@angular/common/http";

/**
 * Generated class for the ListarcursosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listarcursos',
  templateUrl: 'listarcursos.html',
})
export class ListarcursosPage {
  cursos: any;
  loader: any;
  data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public cursosProvider: CursoproviderProvider, public loadingCtrl: LoadingController) {
    this.data = JSON.parse(localStorage.getItem('userData'));
    console.log(this.data.session_name);
    this.getCursos();
  }

  getCursos() {
    this.getLoading();
    this.cursosProvider.getCourses(this.data.session_name, this.data.sessid)
      .then(data => {
        this.cursos = data;
        this.loader.dismiss();
        console.log(this.cursos)
      });
  }

  goToResources(cursos) {
    this.navCtrl.push(ListararchivosPage, {cursos: cursos});
  }

  goToLessons(cursos) {
    this.navCtrl.push(ListarleccionesPage, {cursos: cursos});
  }

  getLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Cargando..."
    });
    this.loader.present();
  }


}
