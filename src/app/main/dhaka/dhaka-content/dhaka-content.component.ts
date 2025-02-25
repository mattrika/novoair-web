import { Component } from '@angular/core'

@Component({
    selector: 'app-dhaka-content',
    imports: [],
    templateUrl: './dhaka-content.component.html',
    styleUrl: './dhaka-content.component.scss',
})
export class DhakaContentComponent {
    bookNow() {
    window.open('https://secure.flynovoair.com/bookings/Vues/flight_selection.aspx', '_blank');
}
}
