import { Component, ElementRef, HostListener } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PrimeModules } from '@core/ui/primeng';
import { OneWayFormService } from '@main/book-flight/services/one-way-form.service'

@Component({
    selector: 'app-one-way',
    imports: [PrimeModules, ReactiveFormsModule],
    templateUrl: './one-way.component.html',
    styleUrl: './one-way.component.scss',
})
export class OneWayComponent {
    flightForm: FormGroup;
    minDate: Date = new Date();
    promoCodeError = '';
    showInputs = false;
    adults = 1; // Default adult count set to 1
    children = 0;
    infants = 0;

    constructor(
        private oneWayFormService: OneWayFormService,
        private eRef: ElementRef,
    ) {
        this.flightForm = this.oneWayFormService.createFlightForm();
    }

    get groupedCities() {
        return this.oneWayFormService.groupedCities;
    }

    get searchType() {
        return this.oneWayFormService.searchType;
    }

    get totalGuests(): number {
        if (this.adults === 0) {
            this.children = 0;
            this.infants = 0;
        }
        return this.adults + this.children + this.infants;
    }

    increase(type: string) {
        if (this.totalGuests < 9) {
            if (type === 'adults' && this.adults < 9) {
                this.adults++;
                this.flightForm.get('adults')?.setValue(this.adults);
            } else if (type === 'children' && this.children < 9) {
                this.children++;
                this.flightForm.get('children')?.setValue(this.children);
            } else if (type === 'infants' && this.infants < 9) {
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
            const bookingData = this.oneWayFormService.getBookingData(this.flightForm);
            const queryParams = new URLSearchParams(bookingData as any).toString();
            const url = `https://secure.flynovoair.com/bookings/flight_selection.aspx?${queryParams}`;
            window.location.href = url;
        } else {
            console.error('Form is invalid:', this.flightForm.errors);
        }
    }
}
