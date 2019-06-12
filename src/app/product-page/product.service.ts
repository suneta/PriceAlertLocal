import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProductByNumber (part: string) {
      return this.http.get('https://tiservices.tire-intelligence.com/new-project-api/getProductByPartNumber.php?part=' + part);
  }

  getPriceByNumber (part: string) {
      return this.http.get('https://tiservices.tire-intelligence.com/new-project-api/getPriceByPartNumber.php?part=' + part);
  }
}
