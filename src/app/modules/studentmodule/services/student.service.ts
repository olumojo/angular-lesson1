import { Injectable } from "@angular/core";
import { Observable,catchError,pipe, retry, throwError } from "rxjs";
import { IStudent } from "../../Interfaces/IStudent";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";



@Injectable({
    providedIn: 'root'
})

export class StudentService {

    url: string = '/assets/mock-data.json'

    constructor(private httpClient: HttpClient){

    }

    getStudents(): Observable<IStudent[]> {
        return this.httpClient.get<IStudent[]>(this.url).pipe(retry(1),catchError(this.handleError))
    }

    handleError(error: HttpErrorResponse){
        let errorMessage ='';
        if(error.error instanceof ErrorEvent){
            errorMessage ='Error: $(error.errror.message)';
        }
        else{
            errorMessage = 'Error code: $(error.status)\nMessage: $(error.message)'; 
        }
        return throwError(errorMessage);
    }
}



