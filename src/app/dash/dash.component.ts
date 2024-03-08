import { Component ,OnInit} from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MINICARDDATA } from '../mini-card/mini-card-data';
import { EngagementService } from '../engagement.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit{
  miniCardData = MINICARDDATA;
  /** Based on the screen size, switch from standard to one column per row */
  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 1,
          miniCard: { cols: 1, rows: 1 },
          chart: { cols: 1, rows: 2 },
          table: { cols: 1, rows: 4 },
        };
      }
 
     return {
        columns: 4,
        miniCard: { cols: 1, rows: 1 },
        chart: { cols: 2, rows: 2 },
        table: { cols: 4, rows: 4 },
      };
    })
  );

  constructor(private breakpointObserver: BreakpointObserver,
    private engagementService: EngagementService
    ) { }



    ngOnInit(): void {
      console.log("ngOnInit DashComponent");
      this.engagementService.getTotalAmountYear().subscribe({
        next: (items:any) => {   
          items.forEach((li:any) => {            
            this.miniCardData[0].value=li.sum_amount;
            this.miniCardData[0].duration=li.year;            
         });  
        }        
      });

      this.engagementService.getTotalContractYear().subscribe({
        next: (items:any) => {   
          items.forEach((li:any) => {            
            this.miniCardData[1].value=li.count_contract;
            this.miniCardData[1].duration=li.year;            
         });  
        }        
      });

      this.engagementService.getTotalOfficeYear().subscribe({
        next: (items:any) => {   
          items.forEach((li:any) => {            
            this.miniCardData[2].value=li.count_offices;
            this.miniCardData[2].duration=li.year;            
         });  
        }        
      });

      this.engagementService.getTotalProviderYear().subscribe({
        next: (items:any) => {   
          items.forEach((li:any) => {            
            this.miniCardData[3].value=li.count_providers;
            this.miniCardData[3].duration=li.year;            
         });  
        }        
      });

     
      
    }

}
