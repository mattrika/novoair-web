import { Component } from '@angular/core'
import { OngoingOffersCardComponent } from '../../main/home/components/ongoing-offers-card/ongoing-offers-card.component'

@Component({
    selector: 'app-current-offers',
    imports: [OngoingOffersCardComponent],
    templateUrl: './current-offers.component.html',
    styleUrl: './current-offers.component.scss',
})
export class CurrentOffersComponent {}
