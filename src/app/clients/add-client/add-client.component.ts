import { Component, OnInit } from '@angular/core';
import { RegionsService } from 'src/app/shared/services/region.service';
import { Client } from '../client';
import { ClientsService } from '../clients.service';
import { Region } from '../region';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  client = new Client();
  regionID!: number;
  regions!: Array<Region>
  constructor(private clienService: ClientsService, private regionService: RegionsService) { }

  ngOnInit(): void {
    this.regionService.getRegions()
    .subscribe((regions: any) => {
      console.log(regions)
      this.regions = regions
    })
  }

  addClient(){
    console.log(this.regionID)
    if(this.regionID && this.client.dateCreation && this.client.dateNaissance && this.client.email && this.client.nomClient && this.client.phoneNumber){
      this.regions.forEach(region => {
        if(region.regionID == this.regionID) {
          this.client.regions = region
        }
      });

    console.log(this.client)
    this.clienService.addClient(this.client)
    .subscribe(res=>{
    })
   }
  }
}
