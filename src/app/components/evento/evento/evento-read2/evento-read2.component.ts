import { Evento } from './../../evento.model';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { EventoRead2DataSource } from './evento-read2-datasource';

@Component({
  selector: 'app-evento-read2',
  templateUrl: './evento-read2.component.html',
  styleUrls: ['./evento-read2.component.css']
})
export class EventoRead2Component implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Evento>;
  dataSource: EventoRead2DataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'nome_resp', 'salanome', 'data_inicial', 'data_final'];

  ngOnInit() {
    this.dataSource = new EventoRead2DataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
