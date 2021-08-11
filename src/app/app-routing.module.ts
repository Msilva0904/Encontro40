import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncluirmotoristaComponent } from './incluirmotorista/incluirmotorista.component';
import { ListarmotoristaComponent } from './listarmotorista/listarmotorista.component';

const routes: Routes = [

  {path:"listarmotorista", component: ListarmotoristaComponent},
  {path:"incluirmotorista", component:IncluirmotoristaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
