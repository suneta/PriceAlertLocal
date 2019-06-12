import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';


export interface Price {
    CurrentAvgPrice : number;
    CurrentDate: Date;
}

export interface Product {
    partNumber : number;
    tireImg : string;
    brand : string;
    productName : string;
    mDescription : string;

}

@Component({
  selector: 'anms-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

    partNumber = '';
    product: Product[] = [];
    show = false;

    date = new Date;

    price: Price[] = [];


    constructor(private svc: ProductService) { }

    ngOnInit() {
    }

    partSubmit (part: string){
        this.partNumber = part;
        this.svc.getProductByNumber(part).subscribe((data:  Product[]) => {
            this.product = data; 
            this.show = true;
            console.log(this.product);
        });
        this.svc.getPriceByNumber(part).subscribe((data:  Price[]) => {
            this.price = data; 
           
            console.log(this.price);
        });
          
    }

    Ctrl($scope)
    {
        $scope.date = new Date();
    }
}
