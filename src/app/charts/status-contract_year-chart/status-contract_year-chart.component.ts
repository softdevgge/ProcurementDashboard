import { Component,OnInit } from '@angular/core';
import { ChartOptions,ChartType,ChartDataset,Chart} from 'chart.js';
import { EngagementService } from '../../engagement.service';

@Component({
  selector: 'app-status-contract_year-chart',
  templateUrl: './status-contract_year-chart.component.html',
  styleUrls: ['./status-contract_year-chart.component.css']
})
export class StatusContractYearChartComponent  implements OnInit{
  public radarChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Radar Chart'
      }
    }
  };
  //public radarChartLabels: string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
  public radarChartLabels: string[] = [];

  public radarChartData: ChartDataset[] = [
    //{ label: 'Series A', data: [65, 59, 90, 81, 56, 55, 40],  },
    //{ label: 'Series B', data: [28, 48, 40, 19, 96, 27, 100],  }
    { label: '', data: [],  }
  ];
  public radarChartType: ChartType = 'radar';
  public data = {
    labels: this.radarChartLabels,
    datasets: this.radarChartData
  };





  public chart: any;
  createChart(){
    this.chart = new Chart("statuschart",{
      data : this.data,
      type : this.radarChartType
      });
      //this.chart.update();
      //console.log(this.chart);
  }
  ngOnInit(): void {
    console.log("ngOnInit getStatusContractYearChartComponent");
    this.engagementService.getStatusContractYear().subscribe(
     
      {
      next: (items:any) => {
        //console.log(salesItems);        
        items.forEach((li:any) => {          
         this.radarChartData[0].label=li.year;

         this.radarChartData[0].data.push(li.count_contract);
         this.radarChartLabels.push(li.status);
       });
       
       this.createChart();
      }
      
    }
    );
    
  }

  constructor(private engagementService: EngagementService
    ) { }
}
