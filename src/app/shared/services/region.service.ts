import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Region } from 'src/app/clients/region';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionsService {
  private dataSource: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  data: Observable<number> = this.dataSource.asObservable();
  url: string=environment.APIURL;

  constructor(private http: HttpClient) { }


  sendData(data: number) {
    this.dataSource.next(data);
  }

  getRegions(){
    return this.http.get(`${this.url}/springboot/region/getRegions`);
  }

  deleteRegion(regionID: number){
    return this.http.delete(`${this.url}/springboot/region/deleteRegion/${regionID}`);
  }

  updateRegion(region: Region){
    return this.http.put(`${this.url}/springboot/region/updateRegion/${region.regionID}`, region);
  }

  addRegion(region: Region){
    console.log(region)
    return this.http.post(`${this.url}/springboot/region/addRegion`, region);
  }

  getRegion(regionID: number){
    return this.http.get(`${this.url}/springboot/region/getRegion/${regionID}`);
  }

}
