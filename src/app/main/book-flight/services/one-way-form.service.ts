import { Injectable } from '@angular/core'
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { SelectItemGroup } from 'primeng/api'

interface SearchType {
    searchTypeName: string
}

@Injectable({
    providedIn: 'root',
})
export class OneWayFormService {
    searchType: SearchType[] = [{ searchTypeName: 'Flexible' }, { searchTypeName: 'Fixed' }]
    groupedCities: SelectItemGroup[] = [
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
    ]

    constructor(private fb: FormBuilder) {}

    createFlightForm(): FormGroup {
        return this.fb.group(
            {
                from: ['', Validators.required], // IATA Code Required
                to: ['', Validators.required], // IATA Code Required
                departure: ['', Validators.required],
                adults: [1, [Validators.required, Validators.min(1)]],
                children: [0],
                infants: [0],
                promocode: [''],
                selectedSearch: [this.searchType[0]], // Set "Flexible" as default
            },
            { validators: [this.sameCityValidator] },
        )
    }

    sameCityValidator(form: FormGroup) {
        const fromValue = form.get('from')?.value
        const toValue = form.get('to')?.value
        return fromValue && toValue && fromValue === toValue ? { sameCity: true } : null
    }

    formatDate(dateString: string, format: 'YYYY-MM' | 'DD'): string {
        if (!dateString) return ''
        const date = new Date(dateString)
        return format === 'YYYY-MM'
            ? `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`
            : String(date.getDate()).padStart(2, '0')
    }

    getBookingData(form: FormGroup) {
        return {
            DC: form.get('from')?.value, // IATA Code for Departure
            AC: form.get('to')?.value, // IATA Code for Arrival
            AM: this.formatDate(form.get('departure')?.value, 'YYYY-MM'),
            AD: this.formatDate(form.get('departure')?.value, 'DD'),
            TT: 'OW', // One-way trip
            FL: 'on',
            PA: form.get('adults')?.value,
            PC: form.get('children')?.value,
            PI: form.get('infants')?.value,
            CD: form.get('promocode')?.value || '',
        }
    }
}
