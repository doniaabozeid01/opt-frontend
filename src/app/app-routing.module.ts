import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/Authentication/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { ClientHomeComponent } from './Components/Client/client-home/client-home.component';
import { AdvancedOrderRequestComponent } from './Components/Client/advanced-order-request/advanced-order-request.component';
import { SupplierHomeComponent } from './Components/Supplier/supplier-home/supplier-home.component';
import { ClientLayoutComponent } from './Components/Client/client-layout/client-layout.component';
import { SupplierLayoutComponent } from './Components/Supplier/supplier-layout/supplier-layout.component';
import { SupplierOrderOfferComponent } from './Components/Supplier/supplier-order-offer/supplier-order-offer.component';
import { HurryOrderRequestComponent } from './Components/Client/hurry-order-request/hurry-order-request.component';
import { AdminSmartDashboardComponent } from './Components/Admin/admin-smart-dashboard/admin-smart-dashboard.component';
import { AdminLayoutComponent } from './Components/Admin/admin-layout/admin-layout.component';

// const routes: Routes = [
//   { path: '', redirectTo: '/home', pathMatch: 'full' },
//   { path: 'home', component: HomeComponent },
//   { path: 'client-home', component: ClientHomeComponent },
//   { path: 'supplier-home', component: SupplierHomeComponent },
//   { path: 'client-advanced-order-request', component: AdvancedOrderRequestComponent },
//   { path: 'login', component: LoginComponent },
// ];







const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },

  // 👩‍🏫 Layout المدرسة / العميل
  {
    path: 'client',
    component: ClientLayoutComponent,
    children: [
      { path: 'home', component: ClientHomeComponent },
      { path: 'advanced-order-request', component: AdvancedOrderRequestComponent },
      { path: 'hurry-order-request', component: HurryOrderRequestComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  },


  {
    path: 'admin',
    component: AdminLayoutComponent, // فيه الـ navbar + <router-outlet>
    children: [
      {
        path: 'smart-dashboard',
        component: AdminSmartDashboardComponent,
        children: [
          // { path: 'market-trends', component: MarketTrendsComponent },
          // { path: 'suppliers-performance', component: SuppliersPerformanceComponent },
          // { path: 'schools-analysis', component: SchoolsAnalysisComponent },
          // { path: 'smart-vision', component: SmartVisionComponent },
          // { path: '', redirectTo: 'market-trends', pathMatch: 'full' } // default tab
        ]
      },]
    },
  // 📦 Layout المورد
  {
    path: 'supplier',
    component: SupplierLayoutComponent,
    children: [
      { path: 'home', component: SupplierHomeComponent },
      { path: 'offers', component: SupplierOrderOfferComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  },

  // بعدين هتزودي admin نفس الفكرة
  // {
  //   path: 'admin',
  //   component: AdminLayoutComponent,
  //   children: [...]
  // },

  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];









@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
