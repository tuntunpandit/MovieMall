import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ApiInterceptor } from './core/interceptors/api.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const mainRoutes: Routes = [
  {
    path: "",
    loadChildren: () => import("./features/features.module").then(m => m.FeaturesModule)
  },
  {
    path: "*",
    redirectTo: "",
    pathMatch: "full"
  }
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(mainRoutes)
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
