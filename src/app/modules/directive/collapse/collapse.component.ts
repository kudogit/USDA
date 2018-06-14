import { OnInit, Component } from '@angular/core';

@Component({
    selector:'collapse',
    templateUrl:'./collapse.component.html',
    styleUrls:["./collapse.component.css"]
})

export class CollapseComponent implements OnInit{
   
    public isNext = false;
    public id = 1;

    public lsText = [
        {id : 1 , toolitName : 'Bookmark'},
        {id : 2 , toolitName : 'Second Mark'},
        {id : 3 , toolitName : 'Three Mark'},
        {id : 4 , toolitName : 'For Mark'}
    ]

    constructor(){
        
    }

    ngOnInit(): void {
        
    }
    checkNextStep(){
        this.isNext = true;
    }
    

}