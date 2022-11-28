import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  url: string=environment.APIURL;
  constructor(private http: HttpClient) { }

  getClients(){
    return this.http.get(`${this.url}/springboot/client/getClients`);
  }

  deleteClient(ID:number){
    return this.http.delete(`${this.url}/springboot/client/deleteClient/${ID}`);
  }

  updateClient(newClient:any){
    return this.http.put(`${this.url}/springboot/client/updateClient/${newClient.clientID}`, newClient);
  }

  addClient(client:object){
    return this.http.post(`${this.url}/springboot/client/addClient`, client);
  }

  getClient(clientID:number){
    console.log(clientID)
    return this.http.get(`${this.url}/springboot/client/getClient/${clientID}`);
  }

}
