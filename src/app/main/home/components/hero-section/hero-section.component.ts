import { CommonModule } from '@angular/common'
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { PrimeModules } from '@core/ui/primeng'

@Component({
  selector: 'app-hero-section',
  imports: [CommonModule, FormsModule, PrimeModules,],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
    ingredient = ''
}
