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
        const baseUrl = 'https://secure.flynovoair.com/bookings/Vues/flight_selection.aspx'
        const params = new URLSearchParams({
            TT: 'MC', // Multi-City
            FL: 'on',
            PA: '1', // Example: 1 Passenger
            DC: 'DAC', // Example: Departure City Code
            // Add other required parameters here
        }).toString()

        window.location.href = `${baseUrl}?${params}`
    }
}
