import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { PrimeModules } from '@core/ui/primeng';
import { SelectItemGroup } from 'primeng/api';

@Component({
    selector: 'app-return',
     imports: [PrimeModules,ReactiveFormsModule],
    templateUrl: './return.component.html',
    styleUrl: './return.component.scss',
})
export class ReturnComponent {
     flightForm: FormGroup;
    groupedCities!: SelectItemGroup[];

    constructor(private fb: FormBuilder) {
        this.flightForm = this.fb.group({
            from: ['', Validators.required],
            to: ['', Validators.required],
            departure: ['', Validators.required],
            return: [''],
            adults: [[Validators.required, Validators.min(1)]],
            children: []
        });

        this.groupedCities = [
            {
                label: 'Domestic',
                value: 'local',
                items: [
                    { label: 'Dhaka', value: 'Dhaka' },
                    { label: 'Chattrogram', value: 'Chattrogram' },
                    { label: 'Sylhet', value: 'Sylhet' },
                    { label: 'Barishal', value: 'Barishal' }
                ]
            },
            {
                label: 'International',
                value: 'inter',
                items: [
                    { label: 'Kalkata', value: 'Kalkata' }
                ]
            }
        ];
    }

    searchFlights() {
        if (this.flightForm.valid) {
            console.log(this.flightForm.value);
        } else {
            console.log('Form is invalid');
        }
    }
}
