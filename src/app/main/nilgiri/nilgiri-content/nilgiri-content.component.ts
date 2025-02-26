import { Component } from '@angular/core'

@Component({
    selector: 'app-nilgiri-content',
    imports: [],
    templateUrl: './nilgiri-content.component.html',
    styleUrl: './nilgiri-content.component.scss',
})
export class NilgiriContentComponent {
    bookNow() {
        window.open('https://secure.flynovoair.com/bookings/Vues/flight_selection.aspx', '_blank')
    }
}
