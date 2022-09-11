import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './components/movies/movies.component';
import { TvSeriesComponent } from './components/tv-series/tv-series.component';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './components/home/home.component';

const featureRutes: Routes = [
  {
    path: "",
    component: WrapperComponent,
    children: [
      {
        path: "",
        component: HomeComponent,
      },
      {
        path: "tv-shows",
        component: TvSeriesComponent
      },
      {
        path: "movies",
        component: MoviesComponent
      },
    ]
  }, 
  {
    path: "**",
    pathMatch: "full",
    redirectTo: ""
  }
]
@NgModule({
  declarations: [
    WrapperComponent,
    MoviesComponent,
    TvSeriesComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(featureRutes),
    CoreModule,
    SharedModule
  ]
})
export class FeaturesModule { }
