import { CommonModule } from '@angular/common'
import { Component} from '@angular/core'
import { ReservationCardComponent } from '../../main/manage-booking/reservation-card/reservation-card.component'

@Component({
    selector: 'app-manage-booking',
    imports: [ReservationCardComponent,CommonModule],
    templateUrl: './manage-booking.component.html',
    styleUrl: './manage-booking.component.scss',
})
export class ManageBookingComponent {
}
