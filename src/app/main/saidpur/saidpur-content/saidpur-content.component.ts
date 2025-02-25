import { Component } from '@angular/core'

@Component({
    selector: 'app-saidpur-content',
    imports: [],
    templateUrl: './saidpur-content.component.html',
    styleUrl: './saidpur-content.component.scss',
})
export class SaidpurContentComponent {
    bookNow() {
    window.open('https://secure.flynovoair.com/bookings/Vues/flight_selection.aspx', '_blank');
}
}
