import { Component, OnInit } from '@angular/core';

import {Route, Router} from '@angular/router';



@Component({
  selector: 'app-evento-crud',
  templateUrl: './evento-crud.component.html',
  styleUrls: ['./evento-crud.component.css']
})
export class EventoCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
 
   navigateToEventoCreate(): void {
    this.router.navigate(['/eventos/create']);
    

  }


}
