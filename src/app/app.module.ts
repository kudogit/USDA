import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './modules/pages/home/home.component';
import { HeaderNavComponent } from './modules/layout/header-nav/header-nav.component';
import { ScriptLoaderService } from './services/script-loader.service';
import { IISComponent } from './modules/pages/iis/iis.component';
import { CollapseComponent } from './modules/directive/collapse/collapse.component';
import { DropdowComponent } from './modules/directive/dropdown/dropdown.component';
import { SearchPipe } from './modules/directive/search/search.component';
import { TooltipModule } from 'ng2-tooltip-directive';
import { NgDatepickerModule } from 'ng2-datepicker';
@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent,
    HeaderNavComponent,
    IISComponent,
    CollapseComponent,
    DropdowComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TooltipModule,
    NgDatepickerModule
  ],
  providers: [ ScriptLoaderService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
