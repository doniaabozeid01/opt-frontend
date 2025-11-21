import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/Authentication/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { ClientHomeComponent } from './Components/Client/client-home/client-home.component';
import { AdvancedOrderRequestComponent } from './Components/Client/advanced-order-request/advanced-order-request.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'client-home', component: ClientHomeComponent },
  { path: 'client-advanced-order-request', component: AdvancedOrderRequestComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
