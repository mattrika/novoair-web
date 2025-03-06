import { CommonModule } from '@angular/common'
import { Component, Input, input } from '@angular/core';
import { Country } from '@main/sales-offices/sales-office.data'
@Component({
  selector: 'app-office-card',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './office-card.component.html',
  styleUrl: './office-card.component.scss'
})
export class OfficeCardComponent {
// offices=input<Offices | undefined>(undefined)
@Input() offices: Country[] = [];
}
