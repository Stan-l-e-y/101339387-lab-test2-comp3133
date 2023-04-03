import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { HttpClientModule } from '@angular/common/http';
import { MissionfilterComponent } from './missionfilter/missionfilter.component';
import { FormsModule } from '@angular/forms';
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MissionlistComponent,
    MissionfilterComponent,
    MissiondetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: MissionlistComponent },
      {
        path: 'missiondetails/:flight_number',
        component: MissiondetailsComponent,
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
