import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { StateModule } from '@angular-london/state';
import { UiModule } from '@angular-london/ui';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, HttpClientModule, UiModule, StateModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
