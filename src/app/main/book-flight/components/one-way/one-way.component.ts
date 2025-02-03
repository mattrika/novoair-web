import { Component } from '@angular/core'
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { PrimeModules } from '@core/ui/primeng'
import { SelectItemGroup } from 'primeng/api'

@Component({
    selector: 'app-one-way',
    imports: [PrimeModules, ReactiveFormsModule],
    templateUrl: './one-way.component.html',
    styleUrl: './one-way.component.scss',
})
export class OneWayComponent {
    visible: boolean = false;
    flightForm: FormGroup
    groupedCities!: SelectItemGroup[]
    promoCodeError: string = '';
    isPromoValid: boolean = false;
    validPromoCodes: string[] = ['Abc', 'Bcd'];

    constructor(private fb: FormBuilder) {
        this.flightForm = this.fb.group({
            from: ['', Validators.required],
            to: ['', Validators.required],
            departure: ['', Validators.required],
            adults: [[Validators.required, Validators.min(1)]],
            children: [],
            promocode:['']
        })

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

    showDialog() {
        this.visible = true;
        this.promoCodeError = '';
        this.isPromoValid = false;
        this.flightForm.get('promocode')?.setValue('');
    }

    validatePromoCode() {
        const enteredCode = this.flightForm.get('promocode')?.value?.trim();

        if (!enteredCode) {
            this.promoCodeError = '';
            this.isPromoValid = false;
            return;
        }

        if (!this.validPromoCodes.includes(enteredCode)) {
            this.promoCodeError = 'Wrong Promo Code';
            this.isPromoValid = false;
        } else {
            this.promoCodeError = '';
            this.isPromoValid = true;
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
