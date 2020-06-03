import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders,HttpParams} from '@angular/common/http';

@Injectable()
export class histoService {
 
  constructor(private http: HttpClient) {
  }
  public getVoyages(){
    return this.http.get("http://localhost:9090/histo");
  }
  
  public deleteVoyagesfromhistobyId(id){
    return this.http.delete("http://localhost:9090/histo/delete/"+id);
  }
  
  public gethistoList(login: string) {
    let params = new HttpParams();
    params = params.append('mail', login);
    return this.http.get('http://localhost:9090/histosearch', { params: params });
  }}