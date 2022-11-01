import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { ItemDto } from "src/app/api/models";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private productUrl: "https://localhost:7166/Item";

    constructor(private http: HttpClient){}

    getProducts() : Observable<ItemDto[]> {
        return this.http.get<any[]>(this.productUrl).pipe(
            tap(data => console.log("All", JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse){
        let errorMessage = '';
        if(err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${err.error.message}`;
        } else{
            errorMessage = `Server returned code: ${err.status}, error mesage is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(()=>errorMessage);

    }
}