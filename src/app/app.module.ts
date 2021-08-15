import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { PageListComponent } from './page-list/page-list.component';

@NgModule({
  declarations: [AppComponent, SearchBoxComponent, PageListComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
