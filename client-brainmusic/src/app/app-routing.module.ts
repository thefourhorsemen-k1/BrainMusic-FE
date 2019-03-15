import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {ListFeedbackComponent} from './admin/list-feedback/list-feedback.component';
import {RegisterFormComponent} from './user/register-form/register-form.component';
import {MusicComponent} from './music/music.component';
import {AdminComponent} from './admin/admin.component';
import {AboutComponent} from './about/about.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'homepage', pathMatch: 'full'
  },
  {
    path: 'homepage', component: HomepageComponent
  },
  {
    path: 'feedback', component: ListFeedbackComponent
  },
  {
    path: 'sign-up', component: RegisterFormComponent
  },
  {
    path: 'music', component: MusicComponent
  },
  {
    path: 'admin', component: AdminComponent
  },
  {
    path: 'about', component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
