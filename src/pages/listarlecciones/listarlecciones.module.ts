import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListarleccionesPage } from './listarlecciones';

@NgModule({
  declarations: [
    ListarleccionesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListarleccionesPage),
  ],
})
export class ListarleccionesPageModule {}
