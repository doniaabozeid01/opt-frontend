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
import { ClientLayoutComponent } from './Components/Client/client-layout/client-layout.component';
import { SupplierLayoutComponent } from './Components/Supplier/supplier-layout/supplier-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminSmartDashboardComponent } from './Components/Admin/admin-smart-dashboard/admin-smart-dashboard.component';
import { AdminLayoutComponent } from './Components/Admin/admin-layout/admin-layout.component';

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
    SupplierOrderOfferComponent,
    ClientLayoutComponent,
    SupplierLayoutComponent,
    AdminSmartDashboardComponent,
    AdminLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
