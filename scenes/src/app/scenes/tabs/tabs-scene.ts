import {Component, NgModule, ViewEncapsulation} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-tab-scene',
  templateUrl: './tabs-scene.html',
  styleUrls: ['./tabs-scene.scss']
})
export class TabsScene {
}

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatListModule,
  ],
  exports: [TabsScene],
  declarations: [TabsScene]
})
export class TabsSceneModule {
}

