import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CompetitorService } from '@app/services/competitor.service';
@Component({
  selector: 'anms-competitor-matrix',
  templateUrl: './competitor-matrix.component.html',
  styleUrls: ['./competitor-matrix.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CompetitorService]
})
export class CompetitorMatrixComponent implements OnInit {
  constructor(private competitorService: CompetitorService) { }
  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<CompetitorMatrix> = new MatTableDataSource();
  ngOnInit() {
    this.getCompetitorMatix();
  }

  // Get List Of All Competitor Matix
  getCompetitorMatix() {
    this.competitorService.getCompetitorMatix().subscribe(
      success => {
        let entry: { hasOwnProperty: (arg0: string) => void; }, name: string;
        entry = success[0];
        for (name in entry) {
          if (name) {
            this.displayedColumns.push(name);
          }
        }
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

export interface CompetitorMatrix {
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

