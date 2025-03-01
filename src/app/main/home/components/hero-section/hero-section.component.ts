import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router'
import { PrimeModules } from '@core/ui/primeng'
import { BookCardComponent } from '../../../book-flight/components/book-card/book-card.component'
import { ManageBookComponent } from '../../../book-flight/components/manage-book/manage-book.component'
import { NgIcon } from '@ng-icons/core'

@Component({
    selector: 'app-hero-section',
    imports: [CommonModule, FormsModule, PrimeModules, BookCardComponent, ManageBookComponent,NgIcon],
    templateUrl: './hero-section.component.html',
    styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
    activeTab = 'Book a Flight'

    constructor(private router: Router) {}

    selectTab(tab: string) {
        this.activeTab = tab
    }

    navigateToMobileCheckIn() {
        this.router.navigate(['/policies/domestic-travel-documents'])
    }
}
