import { Component } from '@angular/core';
import { OfficeCardComponent } from "../../main/office-card/office-card.component";
import { offices, Offices } from '@main/sales-offices/sales-office.data'

@Component({
  selector: 'app-sales-offices',
  imports: [OfficeCardComponent],
  templateUrl: './sales-offices.component.html',
  styleUrl: './sales-offices.component.scss'
})
export class SalesOfficesComponent {
    officesList: Offices = offices;
}
