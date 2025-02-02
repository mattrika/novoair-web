import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { PrimeModules } from '@core/ui/primeng'
import { Router } from '@angular/router';
import { BookCardComponent } from "../../../book-flight/components/book-card/book-card.component";
import { ManageBookComponent } from "../../../book-flight/components/manage-book/manage-book.component";

@Component({
    selector: 'app-hero-section',
    imports: [CommonModule, FormsModule, PrimeModules, BookCardComponent, ManageBookComponent],
    templateUrl: './hero-section.component.html',
    styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
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
