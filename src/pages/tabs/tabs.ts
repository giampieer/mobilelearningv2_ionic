import {Component} from '@angular/core';

import {AboutPage} from '../about/about';
import {HomePage} from '../home/home';
import {ListarcursosPage} from "../listarcursos/listarcursos";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ListarcursosPage;
  tab3Root = AboutPage;

  constructor() {

  }
}
