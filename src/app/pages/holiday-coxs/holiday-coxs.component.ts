import { Component, OnInit } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { PrimeModules } from '@core/ui/primeng'
import { BankPartnersCardComponent } from '../../main/holiday-packages/components/bank-partners-card/bank-partners-card.component'

@Component({
    selector: 'app-holiday-coxs',
    imports: [PrimeModules, FormsModule, BankPartnersCardComponent],
    templateUrl: './holiday-coxs.component.html',
    styleUrl: './holiday-coxs.component.scss',
})
export class HolidayCoxsComponent {
    images: string[] = [
        'assets/images/holiday_packages/coxs/0.jpg',
        'assets/images/holiday_packages/coxs/1.jpg',
        'assets/images/holiday_packages/coxs/2.jpg',
        'assets/images/holiday_packages/coxs/3.jpg',
        'assets/images/holiday_packages/coxs/4.jpg',
        'assets/images/holiday_packages/coxs/5.jpg',
    ]
}
