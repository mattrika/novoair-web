import { Component } from '@angular/core'

@Component({
    selector: 'app-coxs-bazar-content',
    imports: [],
    templateUrl: './coxs-bazar-content.component.html',
    styleUrl: './coxs-bazar-content.component.scss',
})
export class CoxsBazarContentComponent {
    bookNow() {
        window.open('https://secure.flynovoair.com/bookings/Vues/flight_selection.aspx', '_blank')
    }
}
