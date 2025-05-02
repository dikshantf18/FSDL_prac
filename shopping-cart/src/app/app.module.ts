import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Required for ngModel

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent  // Declare the AppComponent here
  ],
  imports: [
    BrowserModule,
    FormsModule  // Import FormsModule for two-way binding (ngModel)
  ],
  providers: [],
  bootstrap: [AppComponent]  // Bootstrap the AppComponent
})
export class AppModule { }
