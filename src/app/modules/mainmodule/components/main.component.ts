import { Component, OnDestroy, OnInit } from "@angular/core";
import { StudentService } from "../../studentmodule/services/student.service";
import { Subscription } from "rxjs";
import { IStudent } from "../../Interfaces/IStudent";

@Component({
    selector:'app-main',
    templateUrl:'./main.component.html',
    styleUrls:['./main.component.css']
})

export class MainComponent implements OnInit, OnDestroy {

    sub: Subscription | undefined ;
    students: IStudent[] = [];
    FilteredStudents: IStudent[]=[];
    _filterBy:string=''

    get Filter(): string{
        return this._filterBy;
    }
    set Filter(value:string){
        this._filterBy = value;
        this.FilteredStudents = this.PerformFilter(value);
        console.log(this.FilteredStudents);
    }
    constructor(private studentSvr: StudentService){

    }
    ngOnInit(): void {
        this.sub = this.studentSvr.getStudents().subscribe(std=>{
            this.students = std;
            this.FilteredStudents = this.students;
        });
    }

    ngOnDestroy(): void {
        this.sub?.unsubscribe();
    }

    PerformFilter(search:string): IStudent[] {
        search = search.toLocaleLowerCase();
        return this.students.filter(
            (st:IStudent) => {
                return (st.first_name.toLocaleLowerCase().includes(search)
                    || st.last_name.toLocaleLowerCase().includes(search) ||
                    st.email.toLocaleLowerCase().includes(search) || 
                    st.gender.toLocaleLowerCase().includes(search) 
                )
            }
        );
    }
}