import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListararchivosPage } from './listararchivos';

@NgModule({
  declarations: [
    ListararchivosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListararchivosPage),
  ],
})
export class ListararchivosPageModule {}
