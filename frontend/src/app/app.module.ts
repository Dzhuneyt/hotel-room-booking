import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialComponentsModuleModule} from './material-components-module/material-components-module.module';
import {HotelDetailsComponent} from './hotel-details/hotel-details.component';
import {RoomsListingComponent} from './rooms-listing/rooms-listing.component';
import {RoomsTypesListingComponent} from './rooms-types-listing/rooms-types-listing.component';
import {RoomsTypePricesListingComponent} from './rooms-type-prices-listing/rooms-type-prices-listing.component';
import {BookingsListingComponent} from './bookings-listing/bookings-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelDetailsComponent,
    RoomsListingComponent,
    RoomsTypesListingComponent,
    RoomsTypePricesListingComponent,
    BookingsListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialComponentsModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}