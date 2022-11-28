import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RegionsService } from 'src/app/shared/services/region.service';
import { Client } from '../client';
import { ClientsService } from '../clients.service';
import { Region } from '../region';

@Component({
  selector: 'app-get-clients-by-id',
  templateUrl: './get-clients-by-id.component.html',
  styleUrls: ['./get-clients-by-id.component.css']
})
export class GetClientsByIdComponent implements OnInit {
  background:string = 'https://us.123rf.com/450wm/detailfoto/detailfoto1702/detailfoto170200097/71490950-fond-d-%C3%A9cran-blanc.jpg?ver=6'
  displayedColumns: string[] = ['clientID', 'nomClient','region','dateNaissance','dateCreation'];
  dataSource = new MatTableDataSource();
  clients!:Array<Client>;
  regions!:Array<Region>;
  regionID!: number;

  @ViewChild(MatSort) sort:any;
  @ViewChild(MatPaginator) paginator:any;

  constructor(private clientService: ClientsService, private regionService: RegionsService) { }

  ngOnInit(): void {
    this.clientService.getClients()
    .subscribe((clients:any) => {
      this.regionService.getRegions()
      .subscribe((regions:any) => {
        this.regions = regions
        this.clients = clients
        this.dataSource = new MatTableDataSource(clients);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator
      })
    })
  }

  filterClients(){
    let clientTable:Array<Client>= [];
    this.clients.forEach(element => {
      if(element.regions.regionID == this.regionID) clientTable.push(element)
    });
    this.dataSource.data = clientTable;
  }
}
