import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { WebsiteService } from '@app/services/website.service';
import { UpdateSite } from '@app/model/update-site.model';

@Component({
  selector: 'anms-website-layout',
  templateUrl: './website-layout.component.html',
  styleUrls: ['./website-layout.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class WebsiteLayoutComponent implements OnInit {
  updateSite: UpdateSite;
  displayedColumns: string[] = [];
  websiteSource: MatTableDataSource<WebsiteLayout> = new MatTableDataSource();
  siteGroupList: SiteGroup[];
  constructor(private websiteService: WebsiteService) {
    this.updateSite = new UpdateSite();
  }

  ngOnInit() {
    this.getWebsiteList();
    this.getWebsiteGroups();
  }

  // To Get List All Websites
  getWebsiteList() {
    this.websiteService.getWebsiteList().subscribe(
      success => {
        let entry: { hasOwnProperty: (arg0: string) => void; }, name: string;
        entry = success[0];
        for (name in entry) {
          if (name) {
            this.displayedColumns.push(name);
          }
        }
        this.websiteSource.data = success;
        this.websiteSource.data.forEach(ws => {
          ws.oldSiteGroup = ws.site_group;
        });
      },
      errors => {
        console.log(errors.Result);
      }
    );
  }

  // To List All Website Groups
  getWebsiteGroups() {
    this.websiteService.getWebsiteGroup().subscribe(
      success => {
        this.siteGroupList = success;

      },
      errors => {
        console.log(errors.Result);
      }
    );
  }

  // Saving new Site Group On Site Group Drop Down Change
  onSiteGroupChange(event: string, id: number) {
    if (this.websiteSource.data.filter(ws => ws.site_id === id)[0].oldSiteGroup === undefined)
      this.websiteSource.data.filter(ws => ws.site_id === id)[0].oldSiteGroup = this.websiteSource.data.filter(ws => ws.site_id === id)[0].newSiteGroup;
    else
      this.websiteSource.data.filter(ws => ws.site_id === id)[0].newSiteGroup = event;

    this.updateSite.existing_site_group_name = this.websiteSource.data.filter(ws => ws.site_id === id)[0].oldSiteGroup;
    this.websiteSource.data.filter(ws => ws.site_id === id)[0].newSiteGroup = event;
    this.updateSite.new_site_group_name = event;//this.dataSource.data.filter(f=>f.site_id==id)[0].newSiteGroup;//event.source.selected;
    this.websiteService.updateWebsiteGroup(this.updateSite).subscribe(
      success => {
        this.websiteSource.data.filter(ws => ws.site_id === id)[0].oldSiteGroup = undefined;
        this.getWebsiteList();
      },
      errors => {
        this.websiteSource.data.filter(ws => ws.site_id === id)[0].oldSiteGroup = undefined;
      }
    );
  }

  // To Filter All Listed Websites
  applyFilter(filterValue: string) {
    // tslint:disable-next-line: no-unused-expression
    this.websiteSource.data.length > 0 ? this.websiteSource.filter = filterValue.trim().toLowerCase() : '';
  }
}

export interface WebsiteLayout {
  site_id: number;
  site_name: string;
  site_group: string;
  site_code: string;
  country_id: number;
  code: string;
  newSiteGroup: string;
  oldSiteGroup: string;
}

export interface SiteGroup {
  site_id: number;
  site_group: string;
  organization_id: number;
}

