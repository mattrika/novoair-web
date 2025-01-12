import { Component } from '@angular/core'
import { BankPartnersCardComponent } from '../../main/holiday-packages/components/bank-partners-card/bank-partners-card.component'
import { PackageCardComponent } from '../../main/holiday-packages/components/package-card/package-card.component'

@Component({
    selector: 'app-holiday-packages',
    imports: [PackageCardComponent, BankPartnersCardComponent],
    templateUrl: './holiday-packages.component.html',
    styleUrl: './holiday-packages.component.scss',
})
export class HolidayPackagesComponent {}
