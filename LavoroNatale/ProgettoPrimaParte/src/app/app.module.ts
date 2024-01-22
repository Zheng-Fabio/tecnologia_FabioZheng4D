import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { appComponent } from './app.component';
import { calciatoriComponent } from './calciatori/calciatori.component';
import { SquadreComponent } from './squadre/squadre.component';

@NgModule({
  declarations: [
    appComponent,
    calciatoriComponent,
    SquadreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [appComponent]
})
export class AppModule { }
