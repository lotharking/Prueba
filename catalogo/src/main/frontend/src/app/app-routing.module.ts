import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { Page404Component } from './components/page404/page404.component';
import { HistoryComponent } from './components/users/history/history.component';


/**Rutas de la App*/
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: CarComponent },
  { path: 'contactenos', component: ContactComponent},
  { path: 'historial', component: HistoryComponent},
  { path: '**', component: Page404Component},
];
//end routing

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
