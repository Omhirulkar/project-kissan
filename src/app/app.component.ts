import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, } from '@ionic/angular/standalone';
import { BottomBarComponent } from "./bottom-bar/bottom-bar.component";


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, BottomBarComponent]
})
export class AppComponent {
  constructor() {}
}
