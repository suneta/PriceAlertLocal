import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CompetitorService } from '@app/services/competitor.service';

export interface CompetitorMatrixSimple {
  rule_number: number;
  rule_description: string;
  key_reference_competitor: string;
  score: number;
  reference_manufacturer_code: string;
  dimension: string;
  reference_brand: string;
  reference_product: string;
  reference_pattern: string;
  competitor_brand: string;
  competitor_product: string;
  competitor_pattern: string;
}

let CompetitorData: CompetitorMatrixSimple[];

@Component({
  selector: 'anms-competitor-matrix_simple',
  templateUrl: './competitor-matrix_simple.component.html',
  styleUrls: ['./competitor-matrix_simple.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CompetitorService]
})
export class CompetitorMatrixSimpleComponent implements OnInit {

  constructor(private competitorService: CompetitorService) { }
  displayedColumns: string[] = [
      'reference_brand', 'reference_product',
    'competitor_brand', 'competitor_product'];
  dataSource: MatTableDataSource<CompetitorMatrixSimple> = new MatTableDataSource();
  ngOnInit() {
    this.getCompetitorMatixSimple();
  }

  getCompetitorMatixSimple() {
    this.competitorService.getCompetitorMatixSimple().subscribe(
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
