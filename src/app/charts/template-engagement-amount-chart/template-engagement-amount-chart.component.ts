import { Component,OnInit } from '@angular/core';
import { ChartOptions,ChartType,ChartDataset,Chart} from 'chart.js';
import { EngagementService } from '../../engagement.service';

@Component({
  selector: 'app-template-engagement-amount-chart',
  templateUrl: './template-engagement-amount-chart.component.html',
  styleUrls: ['./template-engagement-amount-chart.component.css']
})
export class TemplateEngagementAmountChartComponent  implements OnInit {
  public pieChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Chart.js PIE Chart'
      }
    }
  };
  public pieChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  
  public pieChartData: ChartDataset[] = [
    { label: 'Series A', data: [300, 500, 100],  }    
  ];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public data = {
    labels: this.pieChartLabels,
    datasets: this.pieChartData
  };




  public chart: any;
  createChart(){
    this.chart = new Chart("amountchart",{
      data : this.data,
      type : this.pieChartType
      });
      //this.chart.update();
      //console.log(this.chart);
  }
  ngOnInit(): void {
    console.log("ngOnInit TemplateEngagementAmountChartComponent");
    this.engagementService.getTemplateEngagementAmount().subscribe(
     
      {
      next: (items:any) => {
        //console.log(salesItems);
        
        items.forEach((li:any) => {          
         this.pieChartData[0].label=li.year;

         this.pieChartData[0].data.push(li.sum_amount);
         this.pieChartLabels.push(li.template_contract);
       });
       
       this.createChart();
      }
      
    }
    );
    
  }

  constructor(private engagementService: EngagementService
    ) { }
}
