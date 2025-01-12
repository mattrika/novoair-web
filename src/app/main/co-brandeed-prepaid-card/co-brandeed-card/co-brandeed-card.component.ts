import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { ButtonModule } from 'primeng/button'
import { CardModule } from 'primeng/card'

@Component({
    selector: 'app-co-brandeed-card',
    imports: [RouterModule, ButtonModule, CardModule],
    templateUrl: './co-brandeed-card.component.html',
    styleUrl: './co-brandeed-card.component.scss',
})
export class CoBrandeedCardComponent {}
