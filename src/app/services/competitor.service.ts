import { Injectable } from '@angular/core';
import { AppSettings } from '@app/common/AppSettings.ts'
import { BaseService } from './baseservice';
import { User } from '@app/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class CompetitorService {
user: User;
  constructor(private httpService: BaseService) {
    this.user = {} as User;
   }

   // Get Data Of Competitor Matix
  getCompetitorMatix() {
    this.user.user_name = AppSettings.USER_NAME;
    this.user.application_id = AppSettings.APPLICATION_ID;
    this.user.customer_profile_id = AppSettings.CUSTOMER_PROFILE_ID;
    this.user.country_code = AppSettings.COUNTRY_CODE;
    return this.httpService.post(AppSettings.API_ENDPOINT + '/' + AppSettings.API_GET_COMPETITOR_MATRIX, this.user);
  }
  
  getCompetitorMatixSimple() {
    this.user.user_name = AppSettings.USER_NAME;
    this.user.application_id = AppSettings.APPLICATION_ID;
    this.user.customer_profile_id = AppSettings.CUSTOMER_PROFILE_ID;
    this.user.country_code = AppSettings.COUNTRY_CODE;
    return this.httpService.post(AppSettings.API_ENDPOINT + '/' + AppSettings.API_GET_COMPETITOR_MATRIX_SIMPLE, this.user);
  }

  getCompetitorIndex() {
    this.user.user_name = AppSettings.USER_NAME;
    this.user.application_id = AppSettings.APPLICATION_ID;
    this.user.customer_profile_id = AppSettings.CUSTOMER_PROFILE_ID;
    this.user.country_code = AppSettings.COUNTRY_CODE;
    return this.httpService.post(AppSettings.API_ENDPOINT + '/' + AppSettings.API_GET_COMPETITOR_INDEX, this.user);

  }
}

