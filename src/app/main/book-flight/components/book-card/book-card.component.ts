import { CommonModule } from '@angular/common'
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { PrimeModules } from '@core/ui/primeng'

@Component({
  selector: 'app-book-card',
  imports: [PrimeModules, CommonModule, FormsModule],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss'
})
export class BookCardComponent {
    ingredient = ''
}
