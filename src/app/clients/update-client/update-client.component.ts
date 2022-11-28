import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegionsService } from 'src/app/shared/services/region.service';
import { Client } from '../client';
import { ClientsService } from '../clients.service';
import { Region } from '../region';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {
  background:string = 'https://us.123rf.com/450wm/detailfoto/detailfoto1702/detailfoto170200097/71490950-fond-d-%C3%A9cran-blanc.jpg?ver=6'
  public regions!:Array<Region>;
  client = new Client();
  updatedRegionID! : number;

  constructor(private clientService: ClientsService, private regionService: RegionsService, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.clientService.getClient(this.activatedRoute.snapshot.params['id'])
    .subscribe((client:any) => {
      this.regionService.getRegions()
      .subscribe((regions:any) => {
        console.log(client)
        this.updatedRegionID = client.regions.regionID
        this.client = client
        this.regions = regions
      })
    })
  }

  updateClient(): void {
    this.regions.forEach(element => {
      if(element.regionID == this.updatedRegionID){
        console.log(element)
        this.client.regions = element
      }
    });
    console.log(this.client)
    this.clientService.updateClient(this.client)
    .subscribe((client:any) => {
      console.log(client);
    })
  }
}
