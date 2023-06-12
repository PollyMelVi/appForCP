import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecordsComponent } from './records/records.component';
import { RecordComponent } from './record/record.component';
import { ArhiveComponent } from './arhive/arhive.component';
import { RecordsServiceService } from './records-service.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RecordsComponent,
    RecordComponent,
    ArhiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [RecordsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
