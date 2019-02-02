import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatToolbarModule, MatCardModule, MatIconModule, MatChipsModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [MatButtonModule, MatToolbarModule, MatCardModule, MatIconModule, MatChipsModule, HttpClientModule],
  exports: [MatButtonModule, MatToolbarModule, MatCardModule, MatIconModule, MatChipsModule, HttpClientModule],
})
export class MaterialModule { }
