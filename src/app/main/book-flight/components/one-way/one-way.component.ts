import { Component, ElementRef, HostListener } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { PrimeModules } from '@core/ui/primeng';
import { SelectItemGroup } from 'primeng/api';

interface SearchType {
    searchTypeName: string;
}

@Component({
    selector: 'app-one-way',
    imports: [PrimeModules, ReactiveFormsModule],
    templateUrl: './one-way.component.html',
    styleUrl: './one-way.component.scss',
})
export class OneWayComponent {
    searchType: SearchType[] | undefined;
    flightForm: FormGroup;
    groupedCities!: SelectItemGroup[];
    promoCodeError = '';
    minDate: Date = new Date();

    constructor(
        private fb: FormBuilder,
        private eRef: ElementRef
    ) {
        this.searchType = [{ searchTypeName: 'Flexible' }, { searchTypeName: 'Fixed' }];

        this.flightForm = this.fb.group(
            {
                from: ['', Validators.required],  // IATA Code Required
                to: ['', Validators.required],    // IATA Code Required
                departure: ['', Validators.required],
                adults: [this.adults, [Validators.required, Validators.min(1)]],
                children: [this.children],
                infants: [this.infants],
                promocode: [''],
                selectedSearch: new FormControl<SearchType | null>(this.searchType[0]), // Set "Flexible" as default
            },
            { validators: this.sameCityValidator }
        );

        this.groupedCities = [
            {
                label: 'Domestic',
                value: 'local',
                items: [
                    { label: 'Dhaka', value: 'DAC' },
                    { label: 'Chattogram', value: 'CGP' },
                    { label: 'Sylhet', value: 'ZYL' },
                    { label: 'Barishal', value: 'BZL' },
                ],
            },
            {
                label: 'International',
                value: 'inter',
                items: [{ label: 'Kolkata', value: 'CCU' }],
            },
        ];
    }

    sameCityValidator(form: FormGroup) {
        const fromValue = form.get('from')?.value;
        const toValue = form.get('to')?.value;

        return fromValue && toValue && fromValue === toValue ? { sameCity: true } : null;
    }

    formatDate(dateString: string, format: 'YYYY-MM' | 'DD'): string {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return '';
        return format === 'YYYY-MM'
            ? `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`
            : String(date.getDate()).padStart(2, '0');
    }

    searchFlights() {
        if (this.flightForm.valid) {
            const bookingData = {
                DC: this.flightForm.get('from')?.value, // IATA Code for Departure
                AC: this.flightForm.get('to')?.value, // IATA Code for Arrival
                AM: this.formatDate(this.flightForm.get('departure')?.value, 'YYYY-MM'),
                AD: this.formatDate(this.flightForm.get('departure')?.value, 'DD'),
                TT: 'OW',  // One-way trip
                FL: 'on',
                PA: this.flightForm.get('adults')?.value,
                PC: this.flightForm.get('children')?.value,
                PI: this.flightForm.get('infants')?.value,
                CD: this.flightForm.get('promocode')?.value || '',
            };

            const queryParams = new URLSearchParams(bookingData as any).toString();
            const url = `https://secure.flynovoair.com/bookings/flight_selection.aspx?${queryParams}`;

            console.log('Redirecting to:', url);
            window.location.href = url;
        } else {
            console.log('Form is invalid', this.flightForm.errors);
        }
    }

    adults = 1; // Default adult count set to 1
    children = 0;
    infants = 0;

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

    showInputs = false;

    toggleInputs() {
        this.showInputs = !this.showInputs;
    }

    @HostListener('document:click', ['$event'])
    onClickOutside(event: Event) {
        if (!this.eRef.nativeElement.contains(event.target)) {
            this.showInputs = false;
        }
    }
}
