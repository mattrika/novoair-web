import { Component } from '@angular/core'

@Component({
    selector: 'app-rajshahi-content',
    imports: [],
    templateUrl: './rajshahi-content.component.html',
    styleUrl: './rajshahi-content.component.scss',
})
export class RajshahiContentComponent {
    bookNow() {
    window.open('https://secure.flynovoair.com/bookings/Vues/flight_selection.aspx', '_blank');
}
}
