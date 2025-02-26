import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { ButtonModule } from 'primeng/button'

@Component({
    selector: 'app-domestic-destination',
    imports: [ButtonModule, RouterModule],
    templateUrl: './domestic-destination.component.html',
    styleUrl: './domestic-destination.component.scss',
})
export class DomesticDestinationComponent {}
