import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { PrimeModules } from '@core/ui/primeng'

@Component({
    selector: 'app-manage-book',
    imports: [FormsModule, PrimeModules],
    templateUrl: './manage-book.component.html',
    styleUrl: './manage-book.component.scss',
})
export class ManageBookComponent {
    user = {
        reservation: null,
        name: '',
    }
    onFindReservation(form: any) {
        this.user.reservation = form.value.reservation
        this.user.name = form.value.name
    }
}
