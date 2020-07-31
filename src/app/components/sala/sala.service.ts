import { Sala } from "./sala.model";
import { Injectable } from "@angular/core";

import { MatSnackBar, MatSnackBarModule } from "@angular/material/snack-bar";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { Observable, EMPTY } from "rxjs";
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SalaService {

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  baseUrl = "http://localhost:52024/api/sala";

  showMenssage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }


  // inserir
  createSala(sala: Sala): Observable<Sala> {               
    return this.http.post<Sala>(this.baseUrl, sala).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    ); 
  }

  errorHandler(e: any): Observable<any> {
    console.log("Ocorreu um erro:" + e);
    this.showMenssage("Ocorreu um erro", true);
    return EMPTY;
  }


  //ler todos as Salas
  read(): Observable<Sala[]> {
    return this.http.get<Sala[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }



}
