import { Component } from '@angular/core'

@Component({
    selector: 'app-sundarban-content',
    imports: [],
    templateUrl: './sundarban-content.component.html',
    styleUrl: './sundarban-content.component.scss',
})
export class SundarbanContentComponent {
    bookNow() {
    window.open('https://secure.flynovoair.com/bookings/Vues/flight_selection.aspx', '_blank');
}
}
