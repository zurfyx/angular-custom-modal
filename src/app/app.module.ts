import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ModalModule } from './lib/modal';

import { AppComponent } from './app.component';
import { AppModalContentComponent } from './app-modal-content.component';

@NgModule({
  imports: [
    BrowserModule,
    ModalModule,
  ],
  declarations: [
    AppComponent,
    AppModalContentComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
