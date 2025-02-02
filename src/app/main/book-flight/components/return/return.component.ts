import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PrimeModules } from '@core/ui/primeng'

@Component({
  selector: 'app-return',
  imports: [FormsModule,PrimeModules],
  templateUrl: './return.component.html',
  styleUrl: './return.component.scss'
})
export class ReturnComponent implements OnInit {
    countries: any[] | undefined;

    selectedCountry: string | undefined;

    ngOnInit() {
        this.countries = [
            { name: 'Australia', code: 'AU' },
            { name: 'Brazil', code: 'BR' },
            { name: 'China', code: 'CN' },
            { name: 'Egypt', code: 'EG' },
            { name: 'France', code: 'FR' },
            { name: 'Germany', code: 'DE' },
            { name: 'India', code: 'IN' },
            { name: 'Japan', code: 'JP' },
            { name: 'Spain', code: 'ES' },
            { name: 'United States', code: 'US' }
        ];
    }
}
