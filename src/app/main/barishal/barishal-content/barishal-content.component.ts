import { Component } from '@angular/core'

@Component({
    selector: 'app-barishal-content',
    imports: [],
    templateUrl: './barishal-content.component.html',
    styleUrl: './barishal-content.component.scss',
})
export class BarishalContentComponent {
    bookNow() {
        window.open('https://secure.flynovoair.com/bookings/Vues/flight_selection.aspx', '_blank')
    }
}
