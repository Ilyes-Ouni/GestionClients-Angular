import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegionsRoutingModule } from './regions-routing.module';
import { GetRegionsComponent } from './get-regions/get-regions.component';
import { UpdateRegionComponent } from './update-region/update-region.component';
import { AddRegionComponent } from './add-region/add-region.component';
import { MaterialModule } from '../material/material.module';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { GetRegionsbodyComponent } from './get-regions/get-regionsbody/get-regionsbody.component';


@NgModule({
  declarations: [
    GetRegionsComponent,
    UpdateRegionComponent,
    AddRegionComponent,
    GetRegionsbodyComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CdkAccordionModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RegionsRoutingModule
  ],
})
export class RegionsModule { }
