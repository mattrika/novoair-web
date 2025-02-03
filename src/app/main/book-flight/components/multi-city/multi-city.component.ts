import { Component } from '@angular/core'
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { PrimeModules } from '@core/ui/primeng'
import { SelectItemGroup } from 'primeng/api'

@Component({
    selector: 'app-multi-city',
    imports: [PrimeModules, ReactiveFormsModule],
    templateUrl: './multi-city.component.html',
    styleUrl: './multi-city.component.scss',
})
export class MultiCityComponent {
    visible: boolean = false;
    flightForm: FormGroup
    groupedCities!: SelectItemGroup[]
     promoCodeError: string = '';
    isPromoValid: boolean = false;
    validPromoCodes: string[] = ['Abc', 'Bcd'];

    constructor(private fb: FormBuilder) {
        this.flightForm = this.fb.group({
            cities: this.fb.array([this.createCityGroup()]), // Only multiple city selections with departure fields
            adults: [],
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
                items: [{ label: 'Kolkata', value: 'Kolkata' }],
            },
        ]
    }

    get cities() {
        return this.flightForm.get('cities') as FormArray
    }

    createCityGroup(): FormGroup {
        return this.fb.group({
            from: ['', Validators.required],
            to: ['', Validators.required],
            departure: ['', Validators.required], // Each city pair has its own departure
        })
    }

    addCity() {
        this.cities.push(this.createCityGroup())
    }

    removeCity(index: number) {
        if (this.cities.length > 1) {
            this.cities.removeAt(index)
        }
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
