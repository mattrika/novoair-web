import { Component } from '@angular/core'
import { CabinBaggageComponent } from '../../main/baggage/components/cabin-baggage/cabin-baggage.component'
import { CheckedBaggageComponent } from '../../main/baggage/components/checked-baggage/checked-baggage.component'
import { ExtraBaggageComponent } from '../../main/baggage/components/extra-baggage/extra-baggage.component'
import { ProhibitedItemsComponent } from '../../main/baggage/components/prohibited-items/prohibited-items.component'

@Component({
    selector: 'app-baggage',
    imports: [
        CabinBaggageComponent,
        CheckedBaggageComponent,
        ExtraBaggageComponent,
        ProhibitedItemsComponent,
    ],
    templateUrl: './baggage.component.html',
    styleUrl: './baggage.component.scss',
})
export class BaggageComponent {}
