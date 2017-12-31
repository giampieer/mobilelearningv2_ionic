import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ListarcursosPage} from './listarcursos';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    ListarcursosPage,
  ],
  imports: [
    HttpClientModule,
    IonicPageModule.forChild(ListarcursosPage),
  ],
})
export class ListarcursosPageModule {
}
