import { Evento } from "./evento.model";
import { Injectable } from "@angular/core";

import { MatSnackBar, MatSnackBarModule } from "@angular/material/snack-bar";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { Observable, EMPTY } from "rxjs";
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})

export class EventoService {
  // baseUrl = "http://localhost:52024/api/sala"
  baseUrl = "http://localhost:52024/api/evento";

  baseUrlData = "http://localhost:52024/api/evento/filtrodata/" // antes de inserir verificar se ja existe a data cadastrada no banco

  UrlDropSala = "http://localhost:52024/api/sala"; // carregar o drop sala

  cDataretorno = "";
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMenssage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  // inserir
  create(evento: Evento): Observable<Evento> {  
    
    // Validaçao : A única regra de negócio é validar se já existe um evento para a
    // data selecionada e neste caso, não permitir o cadastro.r
    //  http://localhost:52024/api/evento/filtrodata/2020-03-01
      
    return this.http.post<Evento>(this.baseUrl, evento).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    ); 
    
    


  }


  //ler todos os Eventos
  read(): Observable<Evento[]> {
    return this.http.get<Evento[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  //Retornando o Evento do seu id passado -> http://localhost:52024/api/evento/filtro/11
  //readById(id: string): Observable<Evento> {
  readById(id: number): Observable<Evento> {
    const url = `${this.baseUrl}/filtro/${id}`;
    return this.http.get<Evento>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  //update -> http://localhost:52024/api/Evento
  update(evento: Evento): Observable<Evento> {
    return this.http.post<Evento>(this.baseUrl, evento).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
    //return this.http.put<Evento>(this.baseUrl , evento)
  }

  //http://localhost:52024/api/evento/delete/10
  delete(id: number): Observable<Evento> {
    const url = `${this.baseUrl}/delete/${id}`;
    return this.http.get<Evento>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }


  errorHandler(e: any): Observable<any> {
    console.log("Ocorreu um erro:" + e);
    this.showMenssage("Ocorreu um erro", true);
    return EMPTY;
  }

  // dropsala
  getSalaDropDowValues(): Observable<Evento[]> {    
    return this.http.get<Evento[]>(this.UrlDropSala).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }


}
