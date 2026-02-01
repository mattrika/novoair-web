import { Component } from '@angular/core'
import { Offices, offices } from '@main/sales-offices/sales-office.data'
import { OfficeCardComponent } from '../../main/office-card/office-card.component'

@Component({
    selector: 'app-sales-offices',
    imports: [OfficeCardComponent],
    templateUrl: './sales-offices.component.html',
    styleUrl: './sales-offices.component.scss',
})
export class SalesOfficesComponent {
    officesList: Offices = offices
}
