import { Component , OnInit, AfterViewInit } from '@angular/core';
import { ScriptLoaderService } from './services/script-loader.service';
import { importExpr } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
 
    constructor(public _scriptLoaders : ScriptLoaderService){
      
    }

    ngAfterViewInit(): void {
     
    }
}
