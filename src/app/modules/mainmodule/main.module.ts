import { NgModule, OnInit } from "@angular/core";
import { MainComponent } from "./components/main.component";    
import { CommonModule } from "@angular/common";
import { StudentService } from "../studentmodule/services/student.service";
import { Subscription } from "rxjs";
import { IStudent } from "../Interfaces/IStudent";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations:[MainComponent],
    imports:[CommonModule, FormsModule],
    exports:[MainComponent]
})
export class MainModule  {
     
}