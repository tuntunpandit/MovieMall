import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { MoviesComponent } from './components/movies/movies.component';
import { TvSeriesComponent } from './components/tv-series/tv-series.component';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { WrapperComponent } from './components/wrapper/wrapper.component';

const featureRutes: Routes = [
  {
    path: "",
    component: WrapperComponent,
    children: [
      {
        path: "",
        component: MainComponent,
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
    MainComponent,
    MoviesComponent,
    TvSeriesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(featureRutes),
    CoreModule
  ]
})
export class FeaturesModule { }
