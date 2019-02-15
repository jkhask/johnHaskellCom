import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatToolbarModule, MatCardModule,
  MatIconModule, MatChipsModule, MatPaginatorModule } from '@angular/material';

const components = [MatButtonModule, MatToolbarModule, MatCardModule,
                    MatIconModule, MatChipsModule, HttpClientModule,
                    MatPaginatorModule];
@NgModule({
  declarations: [],
  imports: components,
  exports: components,
})
export class MaterialModule { }
