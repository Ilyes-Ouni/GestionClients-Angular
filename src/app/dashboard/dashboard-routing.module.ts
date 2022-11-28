import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientGuard } from '../client.guard';
import { CarouselComponent } from './carousel/carousel.component';

const routes: Routes = [
  {path: '', component: CarouselComponent, canActivate:[ClientGuard]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
