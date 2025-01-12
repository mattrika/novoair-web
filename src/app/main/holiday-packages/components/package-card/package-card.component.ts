import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-package-card',
  imports: [RouterModule],
  templateUrl: './package-card.component.html',
  styleUrl: './package-card.component.scss'
})
export class PackageCardComponent {
    holidayPackages = [
        {
            imageUrl: 'assets/images/holiday_packages/coxs-package.jpg',
            title: "Cox's Bazar Package",
            route: '/holiday-packages/coxs',
        },
        {
            imageUrl: 'assets/images/holiday_packages/sylhet-package.jpg',
            title: 'Sylhet Package',
            route: '/holiday-packages/sylhet',
        },
        {
            imageUrl: 'assets/images/holiday_packages/kolkata-package.jpg',
            title: 'Kolkata Package',
            route: '/holiday-packages/kolkata',
        },
    ]
}
