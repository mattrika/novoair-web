import { Component } from '@angular/core'

@Component({
    selector: 'app-jeshore-content',
    imports: [],
    templateUrl: './jeshore-content.component.html',
    styleUrl: './jeshore-content.component.scss',
})
export class JeshoreContentComponent {
    bookNow() {
        window.open('https://secure.flynovoair.com/bookings/Vues/flight_selection.aspx', '_blank')
    }
}
