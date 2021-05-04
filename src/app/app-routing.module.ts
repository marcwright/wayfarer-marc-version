import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CarouselComponent} from './carousel/carousel.component';

const routes: Routes = [ {
    path: 'home',
    component: CarouselComponent
  }
  // {
  //   path: 'resume',
  //   component: ResumeComponent
  // },
  // {
  //   path: 'links',
  //   component: LinksComponent
  // }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
