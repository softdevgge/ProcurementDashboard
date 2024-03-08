import { Component,OnInit } from '@angular/core';
import { ChartOptions,ChartType,ChartDataset,Chart} from 'chart.js';
import { EngagementService } from '../../engagement.service';


@Component({
  selector: 'app-template-engagement-count-chart',
  templateUrl: './template-engagement-count-chart.component.html',
  styleUrls: ['./template-engagement-count-chart.component.css']
})
export class TemplateEngagementCountChartComponent implements OnInit  {
  public chart: any;

  public lineChartData: ChartDataset[] = [
    { label: '',
      //data: [65, 59, 80, 81, 56, 55, 40]  ,
      data: []  ,
    }
  ];
  public lineChartLabels: string[] =[];// ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart'
      }
    }
  };

  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  public data = {
    labels: this.lineChartLabels,
    datasets: this.lineChartData
  };

  createChart(){
    this.chart = new Chart("templateengagementcountchart",{
      data : this.data,
      type : this.lineChartType
      });
      //this.chart.update();
      //console.log(this.chart);
  }
  ngOnInit(): void {
    console.log("ngOnInit TemplateEngagementCountChartComponent");
    this.engagementService.getTemplateEngagementCount().subscribe(
      //(response:any) => { console.log(response); },
      //(error:any) => { console.log(error); },      
      {
      next: (items:any) => {
        //console.log(salesItems);        
        items.forEach((li:any) => {          

        this.lineChartData[0].label=li.year;

        this.lineChartData[0].data.push(li.count_contract);
        this.lineChartLabels.push(li.template_contract);
       });
       
       this.createChart();
      }
      
    }
    );
    
  }

  constructor(private engagementService: EngagementService
    ) { }
}
