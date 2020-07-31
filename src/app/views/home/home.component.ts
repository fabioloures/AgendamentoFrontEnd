import { SalaService } from './../../components/sala/sala.service';
import { Sala } from './../../components/sala/sala.model';
import { Component, OnInit } from '@angular/core';

import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  salas: Sala[]
  displayedColumns = ['id', 'nome']
  //displayedColumns = ['id', 'nome', 'action']

  constructor(private router: Router, private salaService: SalaService) { }
  

  ngOnInit(): void {


    this.salaService.read().subscribe(salas => {
      this.salas = salas
      // console.log(eventos)
   })    

  } 
  
  navigateToSalaCreate(): void {
    this.router.navigate(['/salas/create']);
  }

  

}
