import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDictionary } from '@app/common/dictionary';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class BaseService {
    public constructor(public httpclient: HttpClient) {

    }

    get(endPoint: string, params?: IDictionary<string>) {

        let httpParams;

        if (params) {
            httpParams = this.buildParams(params);
        }

        return this.httpclient.get(endPoint,
            { params: httpParams }).map(res => JSON.parse(JSON.stringify(res)));

    }


     post(endPoint: string, requestObject: any) {
        return this.httpclient.post(endPoint, requestObject).map(res => JSON.parse(JSON.stringify(res)));
    }

    /**
     * put
     */
    public put(endPoint: string, requestObject: any) {
        return this.httpclient.put(endPoint, requestObject).map(res => JSON.parse(JSON.stringify(res)));
    }

    public delete(endPoint: string, params?: IDictionary<string>) {

        let httpParams;

        if (params) {
            httpParams = this.buildParams(params);
        }


        return this.httpclient.delete(endPoint, httpParams).map(res => JSON.parse(JSON.stringify(res)));
    }


    /**
     * buildParams - Converts from Dictionary to HttpParams
     */
    public buildParams(params: IDictionary<string>): HttpParams {
        let httpParams = new HttpParams();

        if (params) {
            const keys: string[] = params.Keys();

            keys.forEach(key => {
                httpParams = httpParams.append(key, params.Item(key));
            });
        }

        return httpParams;
    }

}