import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FacilitiesListComponent } from './facilities-list/facilities-list.component';
import { FacilitiesEditComponent } from './facilities-edit/facilities-edit.component';
import { FacilitiesCreateComponent } from './facilities-create/facilities-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FacilitiesListComponent,
    FacilitiesEditComponent,
    FacilitiesCreateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
