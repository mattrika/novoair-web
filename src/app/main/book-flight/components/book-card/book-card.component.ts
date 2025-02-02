import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router'
import { PrimeModules } from '@core/ui/primeng'
import { MultiCityComponent } from '../multi-city/multi-city.component'
import { OneWayComponent } from '../one-way/one-way.component'
import { ReturnComponent } from '../return/return.component'

@Component({
    selector: 'app-book-card',
    imports: [
        PrimeModules,
        CommonModule,
        FormsModule,
        ReturnComponent,
        OneWayComponent,
        MultiCityComponent,
    ],
    templateUrl: './book-card.component.html',
    styleUrl: './book-card.component.scss',
})
export class BookCardComponent {
    ingredient = ''
    // activeTab = 'Book a Flight'
    activeTab = 'return'

    constructor(private router: Router) {}

    selectTab(tab: string) {
        this.activeTab = tab
    }

    navigateToMobileCheckIn() {
        this.router.navigate(['/domestic-travel-documents'])
    }
}
