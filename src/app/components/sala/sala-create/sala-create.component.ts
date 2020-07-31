import { Sala } from './../sala.model';
import { SalaService } from './../sala.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sala-create',
  templateUrl: './sala-create.component.html',
  styleUrls: ['./sala-create.component.css']
})
export class SalaCreateComponent implements OnInit {

  constructor(private salaService: SalaService, private router: Router) {}

  sala: Sala = {
    nome: ""    
  };


  
  ngOnInit(): void {
  }


  creatSala(): void {
    this.salaService.createSala(this.sala).subscribe(() => {
      this.salaService.showMenssage("Sala cadastrada com sucesso!");
      this.router.navigate(["/"]);
    });
  }


  cancel(): void {
    this.router.navigate(["/"]);
  }


}
