import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {CursoproviderProvider} from "../../providers/cursoprovider/cursoprovider";
import {TabsPage} from "../tabs/tabs";
import {HttpHeaders} from "@angular/common/http";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  login: {} = {username: '', password: ''};
  data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public provider: CursoproviderProvider) {
  }

  Login() {
    this.provider.getLogin(this.login).then((result) => {
      console.log(result);
      this.data = (result);
      localStorage.setItem('userData', JSON.stringify(this.data));
      if (this.data != null) {
        this.navCtrl.setRoot(TabsPage);
      } else {
        console.log("Error al iniciar session")
      }
    }, (err) => {
      console.log(err);
    });
  }

}
