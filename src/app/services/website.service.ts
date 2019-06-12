import { Injectable } from '@angular/core';
import { AppSettings } from '@app/common/AppSettings.ts'
import { BaseService } from './baseservice';
import {User} from '@app/model/user.model'
import {UpdateSite} from '@app/model/update-site.model'
@Injectable({
  providedIn: 'root'
})
export class WebsiteService {
  user: User;
  updatesite: UpdateSite;
  constructor(private httpService: BaseService) {
    this.user = {} as User;
    this.updatesite = {} as UpdateSite;
    //this.updatesite.user = {} as User;
   }

  getWebsiteList() {
    this.user.user_name = AppSettings.USER_NAME;
    this.user.application_id = AppSettings.APPLICATION_ID;
    this.user.customer_profile_id = AppSettings.CUSTOMER_PROFILE_ID;
    this.user.country_code = AppSettings.COUNTRY_CODE;
    return this.httpService.post(AppSettings.API_ENDPOINT + '/' + AppSettings.API_GET_WEBSITE_LIST, this.user);
  }

  getWebsiteGroup() {
    this.user.user_name = AppSettings.USER_NAME;
    this.user.application_id = AppSettings.APPLICATION_ID;
    this.user.customer_profile_id = AppSettings.CUSTOMER_PROFILE_ID;
    this.user.country_code = AppSettings.COUNTRY_CODE;
    return this.httpService.post(AppSettings.API_ENDPOINT + '/' + AppSettings.API_GET_WEBSITE_GROUP, this.user);
  }

  updateWebsiteGroup(updateSite : UpdateSite){

    this.updatesite.user_name = AppSettings.USER_NAME;
    this.updatesite.application_id = AppSettings.APPLICATION_ID;
    this.updatesite.customer_profile_id = AppSettings.CUSTOMER_PROFILE_ID;
    this.updatesite.existing_site_group_name = updateSite.existing_site_group_name;
    this.updatesite.new_site_group_name = updateSite.new_site_group_name;
    return this.httpService.post(AppSettings.API_ENDPOINT + '/' + AppSettings.API_UPDATE_WEBSITE_GROUP, this.updatesite);
  
    // "user_name" : "test.account@lizeo-group.com",
    // "application_id": 4500001,
    // "customer_profile_id": 8250001,
    // "existing_site_group_name" : "DTC Atlanta",
    // "new_site_group_name" : "DTC South East"

    //https://amiqd9edf5.execute-api.us-east-1.amazonaws.com/production/web_site/update_site_group_name
  }
}


