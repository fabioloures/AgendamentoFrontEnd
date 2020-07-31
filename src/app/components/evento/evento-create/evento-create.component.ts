import { Evento } from "./../evento.model";
import { EventoService } from "./../evento.service";
import { Component, OnInit } from "@angular/core";
import { Route, Router } from "@angular/router";

import { HttpClientModule, HttpClient } from "@angular/common/http";
import { MatSnackBar } from '@angular/material/snack-bar';


/* import {MatDatepickerModule} from '@angular/material/datepicker';
 */

@Component({
  selector: "app-evento-create",
  templateUrl: "./evento-create.component.html",
  styleUrls: ["./evento-create.component.css"],
})
export class EventoCreateComponent implements OnInit {
  // evento: Evento = {
  //   nome: 'Curso 1'
  // }

  //evento: Evento = {
  //  nome_resp: 'Evento 1',
  //  salaid: 2,
  //  data_inicial:  new Date("2020-02-01T00:00:00"),
  //  data_final:   new Date("2020-02-03T00:00:00")
  // }

  evento: Evento = {
    nome_resp: "",
    salaNome: null,
    data_inicial: null,
    data_final: null,
  };

  baseUrlData = "http://localhost:52024/api/evento/filtrodata/" // antes de inserir verificar se ja existe a data cadastrada no banco

  constructor(private eventoService: EventoService, private router: Router, private http: HttpClient,  private snackBar: MatSnackBar) {}

  public listitens: Array<string> = []; //dropSala

  ngOnInit(): void {
    this.dropDownSalaRefesh(); //carregando dropSala
  }

  dropDownSalaRefesh() { //dropSala
    this.eventoService.getSalaDropDowValues().subscribe((data) => {
      //console.log("carregano salas....");
      //console.log(data);
      data.forEach((element) => {    
        //console.log(element["nome"]);    
        this.listitens.push(element["nome"]);
      });
    });
  }

  creatEvento(): void {


    // Validaçao : A única regra de negócio é validar se já existe um evento para a
    // data selecionada e neste caso, não permitir o cadastro.r
    //  http://localhost:52024/api/evento/filtrodata/2020-03-01
    console.log("data inicial digitada:"+this.evento.data_inicial);     
          // validação para conferir se o Evento já cadastrado para essa data
      this.http.get(`${ this.baseUrlData+this.evento.data_inicial }`)
      .subscribe(
        resultado => {
          console.log(resultado)
          this.showMenssage("Evento já cadastrado para essa DATA INICIAL!", true);
           //return EMPTY;  
        },
        erro => {
          if(erro.status == 404) {     
           //console.log('Evento não localizado.')            
           this.eventoService.create(this.evento).subscribe(() => {
            this.eventoService.showMenssage("Evento cadastrado com sucesso!");
            this.router.navigate(["/eventos"]);
          });

          }
          
          
        }
      );

      ////////////
   /*  this.eventoService.create(this.evento).subscribe(() => {
      this.eventoService.showMenssage("Evento cadastrado com sucesso!");
      this.router.navigate(["/eventos"]);
    });
 */

  }

  cancel(): void {
    this.router.navigate(["/eventos"]);
  }

  showMenssage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }


}
