import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { Engagement } from './engagements-table/Engagement';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class EngagementService {
  
  constructor(private http: HttpClient) {
 
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  //host_api = process.env["HOST_API"]; 
  host_api = environment.apiHost; 

  getTemplateEngagementCount(): any {    
    return this.http.get('http://'+this.host_api+':8000/api/engamentcountbytemplate')   
    
  }

  getOfficeEngagementAmount(): any {    
    return this.http.get('http://'+this.host_api+':8000/api/amountbyoffice')   
    
  }
  getTemplateEngagementAmount(): any {    
    return this.http.get('http://'+this.host_api+':8000/api/amountbytemplate')   
    
  }
  getTotalAmountYear(): any {    
    return this.http.get('http://'+this.host_api+':8000/api/amountbyyear')   
    
  }
  getTotalContractYear(): any {    
    return this.http.get('http://'+this.host_api+':8000/api/contractbyyear')   
    
  }
  getStatusContractYear(): any {    
    return this.http.get('http://'+this.host_api+':8000/api/estatuscontractbyyear')   
    
  }
  getTotalOfficeYear(): any {    
    return this.http.get('http://'+this.host_api+':8000/api/officebyyear')   
    
  }
  getTotalProviderYear(): any {    
    
    return this.http.get('http://'+this.host_api+':8000/api/providerbyyear')   
    
  }
  getTopContracts(page:any, pageSize:any,sortactive:any, sortdirection:any): Observable<Engagement[]> {       

    var pagination = 
      {
        "pageIndex": page,
        "pageSize": pageSize,
        "sortActive": sortactive,
        "sortDirection": sortdirection
      }      ;

    
    return this.http.post('http://'+this.host_api+':8000/api/topcontracts', 
    JSON.stringify(pagination),this.httpOptions).pipe(
      map((res:any) =>  res["results"])
    )   
    
  }

  getTopContractsFull(page:any, pageSize:any,sortactive:any, sortdirection:any): any {       

    var pagination = 
      {
        "pageIndex": page,
        "pageSize": pageSize,
        "sortActive": sortactive,
        "sortDirection": sortdirection
      }      ;

    
    return this.http.post('http://'+this.host_api+':8000/api/topcontracts', 
    JSON.stringify(pagination),this.httpOptions);
    
  }


}
