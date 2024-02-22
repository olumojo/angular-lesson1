import { NgModule } from "@angular/core";
import { StudentComponent } from "./components/student/student.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http"


@NgModule({
    imports:[CommonModule,ReactiveFormsModule
    ,HttpClientModule],
    declarations:[StudentComponent],
    exports:[StudentComponent]
})
export class StudentModule{

}