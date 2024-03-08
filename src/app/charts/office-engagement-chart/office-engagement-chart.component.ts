import { Component,OnInit } from '@angular/core';
import { ChartOptions,ChartType,ChartData,ChartDataset,Chart} from 'chart.js';
import { EngagementService } from '../../engagement.service';
@Component({
  selector: 'app-office-engagement-chart',
  templateUrl: './office-engagement-chart.component.html',
  styleUrls: ['./office-engagement-chart.component.css']
})
export class OfficeEngagementsChartComponent  implements OnInit{
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  //public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartLabels: string[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataset[] = [
   // { label: 'Series A', data: [65, 59, 80, 81, 56, 55, 40]  },
    //{ label: 'Series B', data: [28, 48, 40, 19, 86, 27, 90]  }
    { label: '', data: []  }
  ];

  public data :ChartData= {
    labels: this.barChartLabels,
    datasets: this.barChartData
  };
  



  public chart: any;
  createChart(){
    this.chart = new Chart("officechart",{
      data : this.data,
      type : this.barChartType
      });
      //this.chart.update();
      //console.log(this.chart);
  }
  ngOnInit(): void {
    console.log("ngOnInit OfficeEngagements");
    this.engagementService.getOfficeEngagementAmount().subscribe(
     
      {
      next: (items:any) => {
        //console.log(salesItems);
        
        items.forEach((li:any) => {          

         this.barChartData[0].label=li.year;

         this.barChartData[0].data.push(li.sum_amount);
         this.barChartLabels.push(li.office);
       });
       
       this.createChart();
      }
      
    }
    );
    
  }

  constructor(private engagementService: EngagementService
    ) { }
}
