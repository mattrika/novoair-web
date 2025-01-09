import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { ButtonModule } from 'primeng/button'
import { InputNumberModule } from 'primeng/inputnumber'
import { InputTextModule } from 'primeng/inputtext'

@Component({
    selector: 'app-reservation-card',
    imports: [FormsModule, InputTextModule, InputNumberModule, ButtonModule],
    templateUrl: './reservation-card.component.html',
    styleUrl: './reservation-card.component.scss',
})
export class ReservationCardComponent {
    user = {
        reservation: null,
        name: '',
    }
    onFindReservation(form: any) {
        console.log(form.value)
    }
}
