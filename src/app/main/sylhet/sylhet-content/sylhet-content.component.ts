import { Component } from '@angular/core'

@Component({
    selector: 'app-sylhet-content',
    imports: [],
    templateUrl: './sylhet-content.component.html',
    styleUrl: './sylhet-content.component.scss',
})
export class SylhetContentComponent {
    bookNow() {
        window.open('https://secure.flynovoair.com/bookings/Vues/flight_selection.aspx', '_blank')
    }
}
