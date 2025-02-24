import { Component, ElementRef, HostListener } from '@angular/core'
import {
    AbstractControl,
    FormBuilder,
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms'
import { PrimeModules } from '@core/ui/primeng'
import { SelectItemGroup } from 'primeng/api'

interface SearchType {
    searchTypeName: string
}

@Component({
    selector: 'app-return',
    imports: [PrimeModules, ReactiveFormsModule],
    templateUrl: './return.component.html',
    styleUrl: './return.component.scss',
})
export class ReturnComponent {
    searchType: SearchType[] | undefined
    minDate: Date = new Date()
    flightForm: FormGroup
    groupedCities!: SelectItemGroup[]

    promoCodeError = ''

    constructor(
        private fb: FormBuilder,
        private eRef: ElementRef,
    ) {
        this.searchType = [{ searchTypeName: 'Flexible' }, { searchTypeName: 'Fixed' }]

        this.flightForm = this.fb.group(
            {
                from: ['', Validators.required],
                to: ['', Validators.required],
                departure: ['', Validators.required],
                return: [''],
                adults: [1, [Validators.required, Validators.min(1)]], // Set default adults to 1
                children: [0],
                infants: [0],
                promocode: [''],
                selectedSearch: new FormControl<SearchType | null>(this.searchType[0]), // Set default to "Flexible"
            },
            { validators: [this.sameCityValidator, this.dateValidator] },
        )

        this.groupedCities = [
            {
                label: 'Domestic',
                value: 'local',
                items: [
                    { label: 'Dhaka', value: 'DAC' },
                    { label: 'Chattrogram', value: 'CGP' },
                    { label: 'Sylhet', value: 'ZYL' },
                    { label: 'Barishal', value: 'BZL' },
                ],
            },
            {
                label: 'International',
                value: 'inter',
                items: [{ label: 'Kalkata', value: 'CCU' }],
            },
        ]
    }

    sameCityValidator(form: FormGroup) {
        const fromValue = form.get('from')?.value
        const toValue = form.get('to')?.value

        return fromValue && toValue && fromValue === toValue ? { sameCity: true } : null
    }

    dateValidator(control: AbstractControl) {
        const departure = control.get('departure')?.value
        const returnDate = control.get('return')?.value

        if (departure && returnDate && new Date(departure) > new Date(returnDate)) {
            control.get('return')?.setValue('')
            return { invalidReturnDate: true }
        }
        return null
    }

    onDepartureSelect() {
        this.flightForm.get('return')?.updateValueAndValidity()
    }

    validatePromoCode() {
        const enteredCode = this.flightForm.get('promocode')?.value?.trim()

        if (!enteredCode) {
            this.promoCodeError = ''
            return
        }

        // Remove static promo code validation
        this.promoCodeError = ''
        this.flightForm.get('promocode')?.setValue(enteredCode)
    }

    adults = 1 // Set default adults to 1
    children = 0
    infants = 0

    get totalGuests(): number {
        if (this.adults === 0) {
            this.children = 0
            this.infants = 0
        }
        return this.adults + this.children + this.infants
    }

    increase(type: string) {
        if (this.totalGuests < 9) {
            if (type === 'adults' && this.adults < 9) {
                this.adults++
                this.flightForm.get('adults')?.setValue(this.adults)
            } else if (type === 'children' && this.children < 9) {
                this.children++
                this.flightForm.get('children')?.setValue(this.children)
            } else if (type === 'infants' && this.infants < 9) {
                this.infants++
                this.flightForm.get('infants')?.setValue(this.infants)
            }
        }
    }

    decrease(type: string) {
        if (type === 'adults' && this.adults >= 1) {
            this.adults--
            this.flightForm.get('adults')?.setValue(this.adults)
        } else if (type === 'children' && this.children > 0) {
            this.children--
            this.flightForm.get('children')?.setValue(this.children)
        } else if (type === 'infants' && this.infants > 0) {
            this.infants--
            this.flightForm.get('infants')?.setValue(this.infants)
        }
    }

    showInputs = false

    toggleInputs() {
        this.showInputs = !this.showInputs
    }

    @HostListener('document:click', ['$event'])
    onClickOutside(event: Event) {
        if (!this.eRef.nativeElement.contains(event.target)) {
            this.showInputs = false
        }
    }

    searchFlights() {
        if (this.flightForm.valid) {
            const bookingData = {
                DC: this.flightForm.get('from')?.value, // Departure City
                AC: this.flightForm.get('to')?.value, // Arrival City
                AM: this.formatDate(this.flightForm.get('departure')?.value, 'YYYY-MM'), // Departure Year-Month
                AD: this.formatDate(this.flightForm.get('departure')?.value, 'DD'), // Departure Day
                RM: this.flightForm.get('return')?.value
                    ? this.formatDate(this.flightForm.get('return')?.value, 'YYYY-MM')
                    : '', // Return Year-Month
                RD: this.flightForm.get('return')?.value
                    ? this.formatDate(this.flightForm.get('return')?.value, 'DD')
                    : '', // Return Day
                TT: this.flightForm.get('return')?.value ? 'RT' : 'OW', // Trip Type: RT (Round Trip) or OW (One Way)
                FL: 'on', // Fixed Parameter
                PA: this.flightForm.get('adults')?.value, // Number of Adults
                PC: this.flightForm.get('children')?.value, // Number of Children
                PI: this.flightForm.get('infants')?.value, // Number of Infants
                CD: this.flightForm.get('promocode')?.value || '', // Promo Code
            }

            // Construct URL with query parameters
            const queryParams = new URLSearchParams(bookingData as any).toString()
            const url = `https://secure.flynovoair.com/bookings/flight_selection.aspx?${queryParams}`

            window.location.href = url
        } else {
            this.flightForm.errors
        }
    }

    // Helper function to format date
    formatDate(dateString: string, format: 'YYYY-MM' | 'DD'): string {
        if (!dateString) return ''
        const date = new Date(dateString)
        return format === 'YYYY-MM'
            ? `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`
            : String(date.getDate()).padStart(2, '0')
    }
}
