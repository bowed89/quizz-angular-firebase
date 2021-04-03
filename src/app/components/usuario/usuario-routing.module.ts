import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecuperarPasswordComponent } from './recuperar-password/recuperar-password.component';
import { RegisterComponent } from './register/register.component';
import { VerificarCorreoComponent } from './verificar-correo/verificar-correo.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'recuperarPassword', component: RecuperarPasswordComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'verificarCorreo', component: VerificarCorreoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
