import { Component, ElementRef, HostListener } from '@angular/core'
import {
    AbstractControl,
    FormBuilder,
    FormGroup,
    ReactiveFormsModule,
    Validators,
    FormControl
} from '@angular/forms'
import { PrimeModules } from '@core/ui/primeng'
import { SelectItemGroup } from 'primeng/api'

interface SearchType {
    searchTypeName: string;
}

@Component({
    selector: 'app-return',
    imports: [PrimeModules, ReactiveFormsModule],
    templateUrl: './return.component.html',
    styleUrl: './return.component.scss',
})
export class ReturnComponent {
    searchType: SearchType[] | undefined;



    flightForm: FormGroup
    groupedCities!: SelectItemGroup[]

    promoCodeError = ''

    validPromoCodes: string[] = ['Abc', 'Bcd']

    constructor(
        private fb: FormBuilder,
        private eRef: ElementRef,
    ) {

        this.searchType = [
            { searchTypeName: 'Flexible' },
            { searchTypeName: 'Fixed' }
        ];

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
        selectedSearch: new FormControl<SearchType | null>(null)
    },
    { validators: [this.sameCityValidator, this.dateValidator] }
);


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


    sameCityValidator(form: FormGroup) {
    const fromValue = form.get('from')?.value;
    const toValue = form.get('to')?.value;

    return fromValue && toValue && fromValue === toValue
        ? { sameCity: true }
        : null;
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

    adults = 0
    children = 0
    infants = 0



    get totalGuests(): number {
        if(this.adults===0){
            this.children=0
            this.infants=0
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
            console.log(this.flightForm.value)
        } else {
            console.log('Form is invalid')
        }
    }
}
