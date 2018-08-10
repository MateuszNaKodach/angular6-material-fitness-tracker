import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {SignupComponent} from './auth/signup/signup.component';
import {LoginComponent} from './auth/login/login.component';
import {TrainingComponent} from './training/training/training.component';

export const paths = {
  root: '',
  signup: 'signup',
  login: 'login',
  training: 'training'
};

const routes: Routes = [
  {path: paths.root, component: WelcomeComponent},
  {path: paths.signup, component: SignupComponent},
  {path: paths.login, component: LoginComponent},
  {path: paths.training, component: TrainingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

