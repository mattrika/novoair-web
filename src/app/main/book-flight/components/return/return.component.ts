import { Component, ElementRef, HostListener } from '@angular/core'
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, AbstractControl } from '@angular/forms'
import { PrimeModules } from '@core/ui/primeng'
import { SelectItemGroup } from 'primeng/api'

@Component({
    selector: 'app-return',
    imports: [PrimeModules, ReactiveFormsModule],
    templateUrl: './return.component.html',
    styleUrl: './return.component.scss',
})
export class ReturnComponent {
    visible = false
    flightForm: FormGroup
    groupedCities!: SelectItemGroup[]

    promoCodeError = ''
    isPromoValid = false
    validPromoCodes: string[] = ['Abc', 'Bcd']

    constructor(
        private fb: FormBuilder,
        private eRef: ElementRef,
    ) {
        this.flightForm = this.fb.group(
            {
                from: ['', Validators.required],
                to: ['', Validators.required],
                departure: ['', Validators.required],
                return: [''],
                adults: [this.adults, [Validators.required, Validators.min(1)]],
                children: [this.children],
                infants: [this.infants],
                promocode: [''],
            },
            { validators: this.dateValidator },
        )

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
                items: [{ label: 'Kalkata', value: 'Kalkata' }],
            },
        ]
    }

    // showDialog() {
    //     this.visible = true
    //     this.promoCodeError = ''
    //     this.isPromoValid = false
    //     this.flightForm.get('promocode')?.setValue('')
    // }

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
            this.isPromoValid = false
            return
        }

        if (!this.validPromoCodes.includes(enteredCode)) {
            this.promoCodeError = 'Wrong Promo Code'
            this.isPromoValid = false
        } else {
            this.promoCodeError = ''
            this.isPromoValid = true
        }
    }

    adults: number = 1
    children: number = 0
    infants: number = 0

    get totalGuests(): number {
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
        if (type === 'adults' && this.adults > 1) {
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
            console.log(this.flightForm.value)
        } else {
            console.log('Form is invalid')
        }
    }
}
