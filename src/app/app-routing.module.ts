import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProverbsListComponent } from './proverbs-list/proverbs-list.component';
import { ProverbsAddComponent } from './proverbs-add/proverbs-add.component';
import { LoginComponent } from './login/login.component'


const routes : Routes = [
  {path: '', component: LoginComponent},
  {path: 'list', component: ProverbsListComponent},
  {path: 'add', component: ProverbsAddComponent},
  {path: 'update/:proverbId', component: ProverbsAddComponent}  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
