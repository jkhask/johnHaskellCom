import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatCardModule, MatIconModule, MatChipsModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [MatButtonModule, MatToolbarModule, MatCardModule, MatIconModule, MatChipsModule],
  exports: [MatButtonModule, MatToolbarModule, MatCardModule, MatIconModule, MatChipsModule],
})
export class MaterialModule { }
