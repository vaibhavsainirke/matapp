import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

const Material = [
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatInputModule,
  MatBadgeModule,
  MatRadioModule,
  MatTableModule,
  MatSelectModule,
  MatButtonModule,
  MatDialogModule,
  MatSidenavModule,
  HttpClientModule,
  MatToolbarModule,
  MatDividerModule,
  MatGridListModule,
  MatFormFieldModule,
  MatProgressBarModule,
  MatAutocompleteModule,
];

@NgModule({
  imports: [Material],
  exports: [Material],
})
export class MaterialModule {}
