import { OnInit, Component } from '@angular/core';

@Component({
    selector:'app-iis',
    templateUrl:'./iis.component.html',
    styleUrls:['./iis.component.css']
})
export class IISComponent implements OnInit {
    public _ls = [
        { id : 1, name : 'Kevin' , type: 'daily'},
        { id : 2, name : 'Messi', type: 'year'},
        { id : 3, name : 'Ronaldo', type: 'year'},
        { id : 4, name : 'Gerrad', type: 'mounth'},
        { id : 5, name : 'Torress', type: 'mounth'}
    ]

    ngOnInit() {
        
    }

    onChange(event){
        console.log(event.target.value);
    }
}