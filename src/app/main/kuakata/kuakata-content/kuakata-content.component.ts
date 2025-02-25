import { Component } from '@angular/core'

@Component({
    selector: 'app-kuakata-content',
    imports: [],
    templateUrl: './kuakata-content.component.html',
    styleUrl: './kuakata-content.component.scss',
})
export class KuakataContentComponent {
    bookNow() {
        window.open('https://secure.flynovoair.com/bookings/Vues/flight_selection.aspx', '_blank')
    }
}
