import {HttpClient, HttpHeaderResponse, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the CursoproviderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CursoproviderProvider {
  datos: any;
  path: string = "http://opigno.devstec.com";
  rest: string = "http://opigno.devstec.com/rest";

  constructor(public http: HttpClient) {
    console.log('Hello CursoproviderProvider Provider');
  }

  getLogin(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.rest + '/user/login', JSON.stringify(data), {
        headers: new HttpHeaders().set('Content-Type', 'application/json')
          .set('Access-Control-Allow-Origin','*')
      })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getCourses(name, id) {
    return new Promise(resolve => {
      this.http.get(this.path + '/cursos-json', {
        headers: new HttpHeaders().set('Access-Control-Allow-Credentials', 'true')
          .set('Access-Control-Allow-Origin','*')
          .set('Access-Control-Allow-Credentials','*')
          .set('Cookie', name + '=' + id),
      })
      /*this.http.get(this.path + '/my-trainings-rest', {
        headers: new HttpHeaders().set('Cookie', name + '=' + id),
      })*/
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
    });
  }

  getFiles(course) {
    return new Promise(resolve => {
      this.http.get(this.path + '/recursos-json?folder=' + course)
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
    });
  }

  getLessons(id) {
    return new Promise(resolve => {
      this.http.get(this.path + '/leccion-json?id=' + id)
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
    });
  }


}
