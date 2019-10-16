import {Injectable, Optional} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {MasterCeremony} from '../model/MasterCeremony';
import {MC_ENDPOINT} from '../../../Constants';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class McService {

  constructor(private httpclient:HttpClient) { }

  create(mc:any):Observable<MasterCeremony>{
    return this.httpclient.post<MasterCeremony>(MC_ENDPOINT,mc);
  }

  findAll():Observable<MasterCeremony[]>{
    return this.httpclient.get<MasterCeremony[]>(MC_ENDPOINT);
  }

  findMcByName(name):Observable<MasterCeremony>{
    console.log(name);
    return  this.httpclient.get<MasterCeremony>(MC_ENDPOINT+"/mci/name/"+name);
  }


  deletemc(name){
     this.httpclient.get(MC_ENDPOINT+"/delete/"+name);
  }

  updatepatch(name,mc:any):Observable<MasterCeremony>{
     return  this.httpclient.patch<MasterCeremony>(MC_ENDPOINT+"/patch/"+name,mc).pipe(catchError(this.errorhandle));
  }


  errorhandle(error:HttpErrorResponse){
   return throwError(error);
  }

}
