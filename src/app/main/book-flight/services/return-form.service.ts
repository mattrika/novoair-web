import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { SelectItemGroup } from 'primeng/api';

interface SearchType {
    searchTypeName: string;
}

@Injectable({
    providedIn: 'root',
})
export class ReturnFormService {
    searchType: SearchType[] = [{ searchTypeName: 'Flexible' }, { searchTypeName: 'Fixed' }];
    groupedCities: SelectItemGroup[] = [
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
    ];

    constructor(private fb: FormBuilder) {}

    createFlightForm(): FormGroup {
        return this.fb.group(
            {
                from: ['', Validators.required],
                to: ['', Validators.required],
                departure: ['', Validators.required],
                return: [''],
                adults: [1, [Validators.required, Validators.min(1)]],
                children: [0],
                infants: [0],
                promocode: [''],
                selectedSearch: [this.searchType[0]], // Set default to "Flexible"
            },
            { validators: [this.sameCityValidator, this.dateValidator] },
        );
    }

    sameCityValidator(form: FormGroup) {
        const fromValue = form.get('from')?.value;
        const toValue = form.get('to')?.value;
        return fromValue && toValue && fromValue === toValue ? { sameCity: true } : null;
    }

    dateValidator(control: AbstractControl) {
        const departure = control.get('departure')?.value;
        const returnDate = control.get('return')?.value;

        if (departure && returnDate && new Date(departure) > new Date(returnDate)) {
            control.get('return')?.setValue('');
            return { invalidReturnDate: true };
        }
        return null;
    }

    formatDate(dateString: string, format: 'YYYY-MM' | 'DD'): string {
        if (!dateString) return '';
        const date = new Date(dateString);
        return format === 'YYYY-MM'
            ? `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`
            : String(date.getDate()).padStart(2, '0');
    }

    getBookingData(form: FormGroup) {
        return {
            DC: form.get('from')?.value, // Departure City
            AC: form.get('to')?.value, // Arrival City
            AM: this.formatDate(form.get('departure')?.value, 'YYYY-MM'), // Departure Year-Month
            AD: this.formatDate(form.get('departure')?.value, 'DD'), // Departure Day
            RM: form.get('return')?.value
                ? this.formatDate(form.get('return')?.value, 'YYYY-MM')
                : '', // Return Year-Month
            RD: form.get('return')?.value
                ? this.formatDate(form.get('return')?.value, 'DD')
                : '', // Return Day
            TT: form.get('return')?.value ? 'RT' : 'OW', // Trip Type: RT (Round Trip) or OW (One Way)
            FL: 'on', // Fixed Parameter
            PA: form.get('adults')?.value, // Number of Adults
            PC: form.get('children')?.value, // Number of Children
            PI: form.get('infants')?.value, // Number of Infants
            CD: form.get('promocode')?.value || '', // Promo Code
        };
    }
}
