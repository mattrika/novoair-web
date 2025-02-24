import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PrimeModules } from '@core/ui/primeng';

@Component({
    selector: 'app-manage-book',
    imports: [FormsModule, PrimeModules],
    templateUrl: './manage-book.component.html',
    styleUrls: ['./manage-book.component.scss'],
})
export class ManageBookComponent {
    user = {
        reservation: '',
        name: '',
    };



  onFindReservation(form: any) {
    const reservationCode = form.value.reservation;
    const passengerName = form.value.name;

    // Create a form dynamically
    const formElement = document.createElement('form');
    formElement.method = 'POST';
    formElement.action = 'https://secure.flynovoair.com/bookings/retrieve_reservation.aspx';

    // Add hidden input fields
    const inputPnr = document.createElement('input');
    inputPnr.type = 'hidden';
    inputPnr.name = 'pnr';
    inputPnr.value = reservationCode;
    formElement.appendChild(inputPnr);

    const inputName = document.createElement('input');
    inputName.type = 'hidden';
    inputName.name = 'passengerName';
    inputName.value = passengerName;
    formElement.appendChild(inputName);

    // Append the form to the body and submit it
    document.body.appendChild(formElement);
    formElement.submit();
}



}
