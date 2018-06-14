import { OnInit, Component } from '@angular/core';
import { DatepickerOptions } from 'ng2-datepicker';
@Component({
    selector:'collapse',
    templateUrl:'./collapse.component.html',
    styleUrls:["./collapse.component.css"]
})

export class CollapseComponent implements OnInit{
   
    public isNext = false;
    public id = 1;
    date : Date = new Date();
    public settings : DatepickerOptions = {
        minYear: 1970,
        maxYear: 2030,
        displayFormat: 'MMM D[,] YYYY',
        barTitleFormat: 'MMMM YYYY',
        dayNamesFormat: 'dd',
        //firstCalendarDay: 1, // 0 - Sunday, 1 - Monday
        minDate: new Date(Date.now()-7),
         // Minimal selectable date
        maxDate: new Date("2018-06-22"),  
        // Maximal selectable date
        barTitleIfEmpty: 'Click to select a date'
    }

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