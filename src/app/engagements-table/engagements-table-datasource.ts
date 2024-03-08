import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map ,mergeMap} from 'rxjs/operators';
import { Observable, of as observableOf, merge, ObservableInputTuple } from 'rxjs';
//import { Order } from './order';
import { EngagementService } from '../engagement.service';
import { Engagement } from './Engagement';



/**
 * Data source for the EngagementsTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class EngagementsTableDataSource extends DataSource<Engagement> {
  data: Engagement[]=[]; //= EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort| undefined;

  constructor( private engagementService: EngagementService) {
    super();

  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Engagement[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    if (this.paginator && this.sort) {
      const dataMutations = [
        observableOf(this.data),
        this.paginator?.page,
        this.sort?.sortChange
      ];

      return merge(observableOf(this.data), this.paginator?.page, this.sort?.sortChange).pipe(mergeMap(() => { 

        var startIndex =1;
        if (this.paginator && this.paginator.pageIndex!=0 ) {
          startIndex = this.paginator?.pageIndex * this.paginator.pageSize; 
          startIndex=this.paginator.pageIndex;
        }         
        return this.engagementService.getTopContracts(startIndex,
          this.paginator?.pageSize,
          this.sort?.active,
          this.sort?.direction);
        
        
      }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void { }


}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}