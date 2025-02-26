import { Component, ElementRef, HostListener } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PrimeModules } from '@core/ui/primeng';
import { ReturnFormService } from '@main/book-flight/services/return-form.service'


@Component({
    selector: 'app-return',
    imports: [PrimeModules,ReactiveFormsModule],
    templateUrl: './return.component.html',
    styleUrl: './return.component.scss',
})
export class ReturnComponent {
    flightForm: FormGroup;
    minDate: Date = new Date();
    promoCodeError = '';
    showInputs = false;
    adults = 1;
    children = 0;
    infants = 0;

    constructor(
        private returnFormService: ReturnFormService,
        private eRef: ElementRef,
    ) {
        this.flightForm = this.returnFormService.createFlightForm();
    }

    get groupedCities() {
        return this.returnFormService.groupedCities;
    }

    get searchType() {
        return this.returnFormService.searchType;
    }

    get totalGuests(): number {
        if (this.adults === 0) {
            this.children = 0;
            this.infants = 0;
        }
        return this.adults + this.children + this.infants;
    }

    onDepartureSelect() {
        this.flightForm.get('return')?.updateValueAndValidity();
    }

    validatePromoCode() {
        const enteredCode = this.flightForm.get('promocode')?.value?.trim();
        if (!enteredCode) {
            this.promoCodeError = '';
            return;
        }
        this.promoCodeError = '';
        this.flightForm.get('promocode')?.setValue(enteredCode);
    }

    increase(type: string) {
        if (this.totalGuests < 6) {
            if (type === 'adults' && this.adults < 6) {
                this.adults++;
                this.flightForm.get('adults')?.setValue(this.adults);
            } else if (type === 'children' && this.children < 6) {
                this.children++;
                this.flightForm.get('children')?.setValue(this.children);
            } else if (type === 'infants' && this.infants < 6) {
                this.infants++;
                this.flightForm.get('infants')?.setValue(this.infants);
            }
        }
    }

    decrease(type: string) {
        if (type === 'adults' && this.adults >= 1) {
            this.adults--;
            this.flightForm.get('adults')?.setValue(this.adults);
        } else if (type === 'children' && this.children > 0) {
            this.children--;
            this.flightForm.get('children')?.setValue(this.children);
        } else if (type === 'infants' && this.infants > 0) {
            this.infants--;
            this.flightForm.get('infants')?.setValue(this.infants);
        }
    }

    toggleInputs() {
        this.showInputs = !this.showInputs;
    }

    @HostListener('document:click', ['$event'])
    onClickOutside(event: Event) {
        if (!this.eRef.nativeElement.contains(event.target)) {
            this.showInputs = false;
        }
    }

    searchFlights() {
        if (this.flightForm.valid) {
            const bookingData = this.returnFormService.getBookingData(this.flightForm);
            const queryParams = new URLSearchParams(bookingData as any).toString();
            const url = `https://secure.flynovoair.com/bookings/flight_selection.aspx?${queryParams}`;
            window.location.href = url;
        } else {
            console.error('Form is invalid:', this.flightForm.errors);
        }
    }
}
