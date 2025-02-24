import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { PrimeModules } from '@core/ui/primeng'
import { OneWayComponent } from '../one-way/one-way.component'
import { ReturnComponent } from '../return/return.component'

@Component({
    selector: 'app-book-card',
    imports: [PrimeModules, CommonModule, FormsModule, ReturnComponent, OneWayComponent],
    templateUrl: './book-card.component.html',
    styleUrl: './book-card.component.scss',
})
export class BookCardComponent {
    activeTab = 'return'

    selectTab(tab: string) {
        this.activeTab = tab
        if (tab === 'multiCity') {
            this.redirectToMultiCity()
        }
    }

    redirectToMultiCity() {
        window.location.href = 'https://secure.flynovoair.com/bookings/Vues/flight_selection.aspx'
    }
}
