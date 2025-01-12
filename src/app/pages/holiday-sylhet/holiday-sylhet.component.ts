import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { PrimeModules } from '@core/ui/primeng'
import { BankPartnersCardComponent } from "../../main/holiday-packages/components/bank-partners-card/bank-partners-card.component";

@Component({
    selector: 'app-holiday-sylhet',
    imports: [PrimeModules, FormsModule, BankPartnersCardComponent],
    templateUrl: './holiday-sylhet.component.html',
    styleUrl: './holiday-sylhet.component.scss',
})
export class HolidaySylhetComponent {
    images: string[] = [
        'assets/images/holiday_packages/sylhet/0.jpg',
        'assets/images/holiday_packages/sylhet/1.jpg',

    ]
}
