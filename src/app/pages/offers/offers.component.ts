import { Component } from '@angular/core'
import { OfferCardComponent } from '../../main/offers/components/offer-card/offer-card.component'

@Component({
    selector: 'app-offers',
    imports: [OfferCardComponent],
    templateUrl: './offers.component.html',
    styleUrl: './offers.component.scss',
})
export class OffersComponent {}
