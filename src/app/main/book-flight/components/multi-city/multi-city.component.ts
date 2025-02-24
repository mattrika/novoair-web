import { Component, ElementRef, HostListener } from '@angular/core';
import {
    FormArray,
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
    selector: 'app-multi-city',
    imports: [PrimeModules, ReactiveFormsModule],
    templateUrl: './multi-city.component.html',
    styleUrl: './multi-city.component.scss',
})
export class MultiCityComponent {
    searchType: SearchType[] | undefined;
    flightForm: FormGroup;
    groupedCities!: SelectItemGroup[];
    promoCodeError = '';
    validPromoCodes: string[] = ['Abc', 'Bcd'];
    multiCity = false;

    adults = 1;
    children = 0;
    infants = 0;
    showInputs = false;

    constructor(
        private fb: FormBuilder,
        private eRef: ElementRef,
    ) {
        this.searchType = [{ searchTypeName: 'Flexible' }, { searchTypeName: 'Fixed' }];

        this.flightForm = this.fb.group({
            cities: this.fb.array([this.createCityGroup()]),
            adults: [this.adults, [Validators.required, Validators.min(1)]],
            children: [this.children],
            infants: [this.infants],
            promocode: [''],
            selectedSearch: new FormControl<SearchType | null>(null),
        });

        this.groupedCities = [
            {
                label: 'Domestic',
                value: 'local',
                items: [
                    { label: 'Dhaka', value: 'Dhaka' },
                    { label: 'Chattrogram', value: 'Chattrogram' },
                    { label: 'Sylhet', value: 'Sylhet' },
                    { label: 'Barishal', value: 'Barishal' },
                ],
            },
            {
                label: 'International',
                value: 'inter',
                items: [{ label: 'Kolkata', value: 'Kolkata' }],
            },
        ];
    }

    // Get cities array
    get cities(): FormArray {
        return this.flightForm.get('cities') as FormArray;
    }

    // Create a city group with validation
    createCityGroup(): FormGroup {
        return this.fb.group(
            {
                from: ['', Validators.required],
                to: ['', Validators.required],
                departure: ['', Validators.required],
            },
            { validators: this.sameCityValidator },
        );
    }

    // Ensure departure & arrival cities are not the same
    sameCityValidator(form: FormGroup) {
        const fromValue = form.get('from')?.value;
        const toValue = form.get('to')?.value;
        return fromValue && toValue && fromValue === toValue ? { sameCity: true } : null;
    }

    // Add another flight segment
    addCity() {
        this.cities.push(this.createCityGroup());
    }

    // Remove a flight segment (minimum 1 required)
    removeCity(index: number) {
        if (this.cities.length > 1) {
            this.cities.removeAt(index);
        }
    }

    // Validate Promo Code
    validatePromoCode() {
        const enteredCode = this.flightForm.get('promocode')?.value?.trim();

        if (!enteredCode) {
            this.promoCodeError = '';
            return;
        }

        if (!this.validPromoCodes.includes(enteredCode)) {
            this.promoCodeError = 'Wrong Promo Code';
        } else {
            this.promoCodeError = '';
            this.flightForm.get('promocode')?.setValue(enteredCode);
        }
    }

    // Format date to YYYY-MM and DD separately
    formatDate(dateString: string, format: string): string {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return '';

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');

        return format === 'YYYY-MM' ? `${year}-${month}` : day;
    }

    // Search Flights
    searchFlights() {
        if (this.flightForm.valid) {
            // Extract city segments
            const citiesArray = this.flightForm.get('cities') as FormArray;
            const segments = citiesArray.value.map((segment: any, index: number) => ({
                [`DC${index + 1}`]: segment.from, // IATA Code for Departure
                [`AC${index + 1}`]: segment.to,   // IATA Code for Arrival
                [`AM${index + 1}`]: this.formatDate(segment.departure, 'YYYY-MM'),
                [`AD${index + 1}`]: this.formatDate(segment.departure, 'DD'),
            }));

            // Passenger & promo details
            const passengerData = {
                TT: segments.length > 1 ? 'MC' : 'OW', // MC for Multi-City, OW for One-Way
                FL: 'on',
                PA: this.flightForm.get('adults')?.value,
                PC: this.flightForm.get('children')?.value,
                PI: this.flightForm.get('infants')?.value,
                CD: this.flightForm.get('promocode')?.value || '',
            };

            // Merge flight segments & passenger data into query params
            const queryParams = new URLSearchParams({
                ...Object.assign({}, ...segments), // Flatten segments array into object
                ...passengerData,
            }).toString();

            const url = `https://secure.flynovoair.com/bookings/flight_selection.aspx?${queryParams}`;

            console.log('Redirecting to:', url);
            window.location.href = url;
        } else {
            console.log('Form is invalid', this.flightForm.errors);
        }
    }

    // Guest count validation
    get totalGuests(): number {
        if (this.adults === 0) {
            this.children = 0;
            this.infants = 0;
        }
        return this.adults + this.children + this.infants;
    }

    // Increase guest count
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

    // Decrease guest count
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

    // Toggle guest selection visibility
    toggleInputs() {
        this.showInputs = !this.showInputs;
    }

    // Hide input when clicking outside
    @HostListener('document:click', ['$event'])
    onClickOutside(event: Event) {
        if (!this.eRef.nativeElement.contains(event.target)) {
            this.showInputs = false;
        }
    }
}
