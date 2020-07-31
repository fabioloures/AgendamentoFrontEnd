import { SalaCreateComponent } from './components/sala/sala-create/sala-create.component';
import { EventoDeleteComponent } from './components/evento/evento-delete/evento-delete.component';
import { EventoUpdateComponent } from './components/evento/evento-update/evento-update.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './views/home/home.component';
import  {EventoCrudComponent} from './views/evento-crud/evento-crud.component';
import { EventoCreateComponent } from './components/evento/evento-create/evento-create.component';


const routes: Routes = [{
 path: "",
 component: HomeComponent
},
{
  path: "eventos",
  component: EventoCrudComponent
},
{
  path: "eventos/create",
  component: EventoCreateComponent
},
{
  path: "eventos/update/:id",
  component: EventoUpdateComponent
},
{
  path: "eventos/delete/:id",
  component: EventoDeleteComponent
},
{
  path: "salas/create",
  component: SalaCreateComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
