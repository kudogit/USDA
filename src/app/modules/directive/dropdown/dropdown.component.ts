import { OnInit, Component, Input } from '@angular/core';

@Component({
    selector:'dropdown',
    templateUrl:'./dropdown.component.html',
    styleUrls:["./dropdown.component.css"]
})

export class DropdowComponent implements OnInit{
    @Input('id') id: number;
    public query: string = '';
    public isNext = false;
    public isToggle = false;
    public selectList = [];
    public selected = [];
    public item = {
        id : 0 , name : ''
    };

    public _listStyle = [
        
    ]

    constructor(){
        
    }

    ngOnInit(): void {
        this.chooiceList();
    }

    chooiceList(){
        this._listStyle = [
            {
                _stId : 1,
                ls :[
                    {id: 106, name: "dat 123", desc: "dat 123", publicFlag: false, editable: true},
                    {id: 105, name: "dat xyz", desc: "dat xyz", publicFlag: false, editable: true},
                    {id: 1, name: "St Joseph", desc: "PK test 1 - adding default data since the tables were wiped",publicFlag: false, editable: true},
                    {id: 97, name: "Test Khoa", desc: "Test Khoa Desc", publicFlag: true, editable: true}
                ]
            },
            {
                _stId : 2,
                ls :[
                    {id: 106, name: "dat 123", desc: "dat 123", publicFlag: false, editable: true},
                    {id: 105, name: "dat xyz", desc: "dat xyz", publicFlag: false, editable: true},
                ]
            },
            {
                _stId : 3,
                ls :[
                    {id: 106, name: "dat 123", desc: "dat 123", publicFlag: false, editable: true},
                    {id: 105, name: "dat xyz", desc: "dat xyz", publicFlag: false, editable: true},
                ]
            },
            {
                _stId : 4,
                ls :[
                    {id: 106, name: "dat 123", desc: "dat 123", publicFlag: false, editable: true},
                ]
            }
        ];
        this._listStyle = this._listStyle.filter(x=>x._stId == this.id);
        this._listStyle.forEach((item)=>{
            this.selected = item.ls;
        });
    }

    toggle(){
        this.isToggle = !this.isToggle;
    }

    getValue(item){
        this.item = item;
        this.isToggle = false;
    }
    
}