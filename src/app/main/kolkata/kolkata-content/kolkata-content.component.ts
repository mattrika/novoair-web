import { Component } from '@angular/core'

@Component({
    selector: 'app-kolkata-content',
    imports: [],
    templateUrl: './kolkata-content.component.html',
    styleUrl: './kolkata-content.component.scss',
})
export class KolkataContentComponent {
    bookNow() {
    window.open('https://secure.flynovoair.com/bookings/Vues/flight_selection.aspx', '_blank');
}
}
