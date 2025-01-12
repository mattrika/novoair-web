import { Component } from '@angular/core'
import { DomesticDestinationComponent } from '../../main/destination/domestic-destination/domestic-destination.component'
import { InternationalDestinationComponent } from '../../main/destination/international-destination/international-destination.component'

@Component({
    selector: 'app-destination',
    imports: [DomesticDestinationComponent, InternationalDestinationComponent],
    templateUrl: './destination.component.html',
    styleUrl: './destination.component.scss',
})
export class DestinationComponent {}
