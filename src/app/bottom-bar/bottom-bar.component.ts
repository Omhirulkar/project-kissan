import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel,  } from "@ionic/angular/standalone";

@Component({
  selector: 'app-bottom-bar',
  standalone: true,
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss'],
  imports : [IonTabBar, IonTabs, IonTabButton, IonIcon, IonLabel, ]
})
export class BottomBarComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
