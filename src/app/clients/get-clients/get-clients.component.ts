import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RegionsService } from 'src/app/shared/services/region.service';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-get-clients',
  templateUrl: './get-clients.component.html',
  styleUrls: ['./get-clients.component.css']
})
export class GetClientsComponent implements OnInit {
  background:string = 'https://us.123rf.com/450wm/detailfoto/detailfoto1702/detailfoto170200097/71490950-fond-d-%C3%A9cran-blanc.jpg?ver=6'
  displayedColumns: string[] = ['clientID', 'nomClient', 'email', 'phoneNumber', 'region','dateNaissance','dateCreation', 'options'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort:any;
  @ViewChild(MatPaginator) paginator:any;

  constructor(private clientService: ClientsService, private regionService: RegionsService) { }

  ngOnInit(): void {
    this.clientService.getClients()
    .subscribe((res:any) => {
      console.log(res)
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator
    })
  }

  deleteClient(clientID:number){
    if (confirm('Are you sure you want to delete this client')){
      this.clientService.deleteClient(clientID)
      .subscribe(res => {
      })
    }
  }


  test(t:any){
    console.log(t)
  }

}
