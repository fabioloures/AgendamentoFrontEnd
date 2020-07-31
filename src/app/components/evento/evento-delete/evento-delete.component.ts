import { EventoService } from "./../evento.service";
import { Evento } from "./../evento.model";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-evento-delete",
  templateUrl: "./evento-delete.component.html",
  styleUrls: ["./evento-delete.component.css"],
})
export class EventoDeleteComponent implements OnInit {
  evento: Evento;

  constructor(
    private eventoService: EventoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //  const id = this.route.snapshot.paramMap.get('id');
    const id = +this.route.snapshot.paramMap.get('id');   // o + transforma o id em NUMERICO
    this.eventoService.readById(id).subscribe((evento) => {
      this.evento = evento;
    });
  }

  deleteEvento(): void {
    // this.eventoService.delete(`${this.evento.id}`).subscribe(()=>{
    this.eventoService.delete(this.evento.id).subscribe(() => {
      this.eventoService.showMenssage("Evento excluído com sucesso!");
      this.router.navigate(["/eventos"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/eventos"]);
  }
}
