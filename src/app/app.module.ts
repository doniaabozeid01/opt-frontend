import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/Authentication/login/login.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './Components/home/home.component';
import { AdvancedOrderRequestComponent } from './Components/Client/advanced-order-request/advanced-order-request.component';
import { ClientHomeComponent } from './Components/Client/client-home/client-home.component';
import { HurryOrderRequestComponent } from './Components/Client/hurry-order-request/hurry-order-request.component';
import { ClientNavbarComponent } from './Components/Client/client-navbar/client-navbar.component';
import { SupplierHomeComponent } from './Components/Supplier/supplier-home/supplier-home.component';
import { SupplierNavbarComponent } from './Components/Supplier/supplier-navbar/supplier-navbar.component';
import { SupplierOrderOfferComponent } from './Components/Supplier/supplier-order-offer/supplier-order-offer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdvancedOrderRequestComponent,
    ClientHomeComponent,
    HurryOrderRequestComponent,
    ClientNavbarComponent,
    SupplierHomeComponent,
    SupplierNavbarComponent,
    SupplierOrderOfferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
