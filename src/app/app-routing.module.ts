import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormnaturalComponent } from './components/formnatural/formnatural.component';
import { OpcionesComponent } from './components/opciones/opciones.component';

const routes: Routes = [
  {
    path: '',
    component: OpcionesComponent,
  },
  {
    path: 'form-persona-natural',
    component: FormnaturalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
