import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatToolbarModule, MatCardModule,
  MatIconModule, MatChipsModule, MatPaginatorModule,
  MatProgressBarModule } from '@angular/material';

const mods = [MatButtonModule, MatToolbarModule, MatCardModule,
                    MatIconModule, MatChipsModule, HttpClientModule,
                    MatPaginatorModule, MatProgressBarModule];
@NgModule({
  declarations: [],
  imports: mods,
  exports: mods,
})
export class MaterialModule { }
