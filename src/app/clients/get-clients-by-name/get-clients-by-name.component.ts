import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RegionsService } from 'src/app/shared/services/region.service';
import { Client } from '../client';
import { ClientsService } from '../clients.service';
import { Region } from '../region';

@Component({
  selector: 'app-get-clients-by-name',
  templateUrl: './get-clients-by-name.component.html',
  styleUrls: ['./get-clients-by-name.component.css']
})
export class GetClientsByNameComponent implements OnInit {
  background:string = 'https://us.123rf.com/450wm/detailfoto/detailfoto1702/detailfoto170200097/71490950-fond-d-%C3%A9cran-blanc.jpg?ver=6'
  clients!:Array<Client>
  regions!: Array<Region>
  clientName!: string;

  displayedColumns: string[] = ['clientID', 'nomClient', 'email', 'phoneNumber', 'region','dateNaissance','dateCreation', 'options'];
  dataSource = new MatTableDataSource();

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

  rechercherClients(){
    if(this.clientName)
      this.dataSource.data =  this.clients.filter((client:Client) => client.nomClient.toLowerCase().indexOf(this.clientName.toLowerCase()) !== -1);
    else
      this.dataSource.data = this.clients
  }


  deleteClient(clientID:number){
    if (confirm('Are you sure you want to delete this client')){
      this.clientService.deleteClient(clientID)
      .subscribe(res => {
      })
    }
  }
}
