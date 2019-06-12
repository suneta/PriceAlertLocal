import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CompetitorService } from '@app/services/competitor.service';

export interface CompetitorIndex {
  max_index: number,
  min_index: number,
  target_index: number,
  key_reference_competitor: string;
  reference_manufacturer_code: string;
  dimension: string;
  reference_brand: string;
  reference_product: string;
  reference_pattern: string;
  competitor_brand: string;
  competitor_product: string;
  competitor_pattern: string;
}

let CompetitorData: CompetitorIndex[];

@Component({
  selector: 'anms-competitor-index',
  templateUrl: './competitor-index.component.html',
  styleUrls: ['./competitor-index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CompetitorService]
})
export class CompetitorIndexComponent implements OnInit {

  constructor(private competitorService: CompetitorService) { }
  displayedColumns: string[] = [ 'max_index', 'min_index', 'target_index', 'key_reference_competitor',
    'reference_manufacturer_code', 'dimension', 'reference_brand', 'reference_product', 'reference_pattern',
    'competitor_brand', 'competitor_product', 'competitor_pattern'];
  dataSource: MatTableDataSource<CompetitorIndex> = new MatTableDataSource();
  ngOnInit() {
    this.getCompetitorIndex();
  }

  getCompetitorIndex() {
    this.competitorService.getCompetitorIndex().subscribe(
      success => {
          this.dataSource.data = success;
      },
      errors => {
        console.log(errors.Result);
      }
    );
  }

  applyFilter(filterValue: string) {
    // tslint:disable-next-line: no-unused-expression
    this.dataSource.data.length > 0 ? this.dataSource.filter = filterValue.trim().toLowerCase() : '';
  }

}
