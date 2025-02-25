import { Component } from '@angular/core'

@Component({
    selector: 'app-chattogram-content',
    imports: [],
    templateUrl: './chattogram-content.component.html',
    styleUrl: './chattogram-content.component.scss',
})
export class ChattogramContentComponent {
    bookNow() {
    window.open('https://secure.flynovoair.com/bookings/Vues/flight_selection.aspx', '_blank');
}
}
