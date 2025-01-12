import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { PrimeModules } from '@core/ui/primeng'
import { BankPartnersCardComponent } from "../../main/holiday-packages/components/bank-partners-card/bank-partners-card.component";

@Component({
    selector: 'app-holiday-kolkata',
    imports: [PrimeModules, FormsModule, BankPartnersCardComponent],
    templateUrl: './holiday-kolkata.component.html',
    styleUrl: './holiday-kolkata.component.scss',
})
export class HolidayKolkataComponent {
    images: string[] = [
        'assets/images/holiday_packages/kolkata/0.jpg',
        'assets/images/holiday_packages/kolkata/1.jpg',
    ]
}
