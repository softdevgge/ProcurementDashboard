import { AfterViewInit, Component, ViewChild,OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { EngagementsTableDataSource } from './engagements-table-datasource';
//import { Order } from './order';
import { Engagement } from './Engagement';
import { EngagementService } from '../engagement.service';

@Component({
  selector: 'app-engagements-table',
  templateUrl: './engagements-table.component.html',
  styleUrls: ['./engagements-table.component.css']
})
export class EngagementsTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Engagement>;
  dataSource: EngagementsTableDataSource;
  dataLength: number;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    'id_contract',
    'startDate',
    'title_contract',
    'estatus',
    'amount_contract',
    'office',
  ];

  constructor( private engagementService: EngagementService) {
    this.dataSource = new EngagementsTableDataSource(engagementService);
    this.dataLength=0;
  }

  ngOnInit() {
    
    this.dataSource = new EngagementsTableDataSource(this.engagementService);
    this.engagementService.getTopContractsFull(1,10,"","").subscribe(     
      {
      next: (items:any) => {
        //console.log(items);
        console.log(items.pagination.count);
        
        this.dataLength=items.pagination.count;
       
      }
      
    }
    );

   }



  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
