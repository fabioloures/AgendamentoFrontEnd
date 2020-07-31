import { Evento } from "./../evento.model";
import { Route, Router, ActivatedRoute } from "@angular/router";
import { EventoService } from "./../evento.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-evento-update",
  templateUrl: "./evento-update.component.html",
  styleUrls: ["./evento-update.component.css"],
})
export class EventoUpdateComponent implements OnInit {
  evento: Evento;

  constructor(
    private eventoService: EventoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public listitens: Array<string> = []; //dropSala

  ngOnInit(): void {
    //console.log("temp entrou update evento");
    const id = +this.route.snapshot.paramMap.get("id"); // + usado para converter para NUMERO
    this.eventoService.readById(id).subscribe((evento) => {
      this.evento = evento;
      //console.log(this.evento);
    });

    this.dropDownSalaRefesh(); //carregando dropSala

  }




  updateEvento(): void {
    this.eventoService.update(this.evento).subscribe(() => {
      this.eventoService.showMenssage("Evento foi alterado com sucesso!");
      this.router.navigate(["/eventos"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/eventos"]);
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


}
