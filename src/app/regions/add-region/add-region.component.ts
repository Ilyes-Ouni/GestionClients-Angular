import { Component, OnInit } from '@angular/core';
import { Region } from 'src/app/clients/region';
import { RegionsService } from 'src/app/shared/services/region.service';

@Component({
  selector: 'app-add-region',
  templateUrl: './add-region.component.html',
  styleUrls: ['./add-region.component.css']
})
export class AddRegionComponent implements OnInit {
  newRegion= new Region();
  regionName!: string;
  constructor(private regionService: RegionsService) { }

  ngOnInit(): void {
  }

  addRegion(){
    this.newRegion.regionName = this.regionName
    this.regionService.addRegion(this.newRegion)
    .subscribe((res)=>{
    })
  }

}
