import { NgModule } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';


const Material = [
  MatIconModule,
  MatListModule,
  MatBadgeModule,
  MatButtonModule,
  MatToolbarModule,
  MatGridListModule,
];

@NgModule({
  imports: [Material],
  exports: [Material],

})
export class MaterialModule {}
