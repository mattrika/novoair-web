import { Component } from '@angular/core'

@Component({
    selector: 'app-saint-martin-content',
    imports: [],
    templateUrl: './saint-martin-content.component.html',
    styleUrl: './saint-martin-content.component.scss',
})
export class SaintMartinContentComponent {bookNow() {
    window.open('https://secure.flynovoair.com/bookings/Vues/flight_selection.aspx', '_blank');
}}
