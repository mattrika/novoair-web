import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { PrimeModules } from '@core/ui/primeng';
import { SelectItemGroup } from 'primeng/api';

@Component({
    selector: 'app-multi-city',
  imports: [PrimeModules,ReactiveFormsModule],
    templateUrl: './multi-city.component.html',
    styleUrl: './multi-city.component.scss',
})
export class MultiCityComponent {
    // flightForm: FormGroup;
    // groupedCities!: SelectItemGroup[];

    // constructor(private fb: FormBuilder) {
    //     this.flightForm = this.fb.group({
    //         cities: this.fb.array([this.createCityGroup()]), // FormArray for multiple city selections
    //         departure: ['', Validators.required],
    //         return: [''],
    //         adults: [1, [Validators.required, Validators.min(1)]],
    //         children: [0, [Validators.required, Validators.min(0)]]
    //     });

    //     this.groupedCities = [
    //         {
    //             label: 'Domestic',
    //             value: 'local',
    //             items: [
    //                 { label: 'Dhaka', value: 'Dhaka' },
    //                 { label: 'Chattrogram', value: 'Chattrogram' },
    //                 { label: 'Sylhet', value: 'Sylhet' },
    //                 { label: 'Barishal', value: 'Barishal' }
    //             ]
    //         },
    //         {
    //             label: 'International',
    //             value: 'inter',
    //             items: [
    //                 { label: 'Kolkata', value: 'Kolkata' }
    //             ]
    //         }
    //     ];
    // }

    // get cities() {
    //     return this.flightForm.get('cities') as FormArray;
    // }

    // createCityGroup(): FormGroup {
    //     return this.fb.group({
    //         from: ['', Validators.required],
    //         to: ['', Validators.required]
    //     });
    // }

    // addCity() {
    //     this.cities.push(this.createCityGroup());
    // }

    // removeCity(index: number) {
    //     if (this.cities.length > 1) {
    //         this.cities.removeAt(index);
    //     }
    // }

    // searchFlights() {
    //     if (this.flightForm.valid) {
    //         console.log(this.flightForm.value);
    //     } else {
    //         console.log('Form is invalid');
    //     }
    // }

    // --------------------------

  flightForm: FormGroup;
  groupedCities!: SelectItemGroup[];

  constructor(private fb: FormBuilder) {
    this.flightForm = this.fb.group({
      cities: this.fb.array([this.createCityGroup()]), // Only multiple city selections with departure fields
      adults: [],
      children: [],
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

  get cities() {
    return this.flightForm.get('cities') as FormArray;
  }

  createCityGroup(): FormGroup {
    return this.fb.group({
      from: ['', Validators.required],
      to: ['', Validators.required],
      departure: ['', Validators.required], // Each city pair has its own departure
    });
  }

  addCity() {
    this.cities.push(this.createCityGroup());
  }

  removeCity(index: number) {
    if (this.cities.length > 1) {
      this.cities.removeAt(index);
    }
  }

  searchFlights() {
    if (this.flightForm.valid) {
      console.log(this.flightForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
