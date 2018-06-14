import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/pages/home/home.component';
import { IISComponent } from './modules/pages/iis/iis.component';

const routes: Routes = [
    { path: 'index' , component: HomeComponent },
    { path: 'iis' , component: IISComponent },
    { path: '' , redirectTo:'/index' , pathMatch: 'full'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }