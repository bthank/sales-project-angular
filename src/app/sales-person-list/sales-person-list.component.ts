import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // create an array of SalesPerson objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("John","Smith", "john.smith@gmail.com",110050),
    new SalesPerson("Mary","Poler", "mary.poler@gmail.com",51900),
    new SalesPerson("Alice","Devries", "alice.devries@yahoo.com",73720),
    new SalesPerson("Tom","Kelly", "tom.kelly@gmail.com",60000)
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
