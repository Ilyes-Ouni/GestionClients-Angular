import { Component, OnInit } from '@angular/core';
import { Region } from 'src/app/clients/region';
import { RegionsService } from 'src/app/shared/services/region.service';

@Component({
  selector: 'app-update-region',
  templateUrl: './update-region.component.html',
  styleUrls: ['./update-region.component.css']
})
export class UpdateRegionComponent implements OnInit {
  oldRegion = new Region();
  newRegion = new Region();
  constructor(private regionService: RegionsService) { }

  ngOnInit(): void {
    this.regionService.data.subscribe(regionID => {
        this.regionService.getRegion(regionID)
        .subscribe((region: any)=>{
            this.oldRegion = region;
            this.newRegion.regionID = regionID
        })
    });
  }

  updateRegion(){
    console.log(this.newRegion)
      this.regionService.updateRegion(this.newRegion)
      .subscribe((res)=>{
      })
  }

}
