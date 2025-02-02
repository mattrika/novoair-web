import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { PrimeModules } from '@core/ui/primeng'
import { Router } from '@angular/router';

@Component({
    selector: 'app-book-card',
    imports: [PrimeModules, CommonModule, FormsModule],
    templateUrl: './book-card.component.html',
    styleUrl: './book-card.component.scss',
})
export class BookCardComponent {
    ingredient = ''
    activeTab: string = 'Book a Flight';

        constructor(private router: Router) {}

      selectTab(tab: string) {
        this.activeTab = tab;
      }

      navigateToMobileCheckIn(){
        this.router.navigate(['/domestic-travel-documents']);
      }
}
