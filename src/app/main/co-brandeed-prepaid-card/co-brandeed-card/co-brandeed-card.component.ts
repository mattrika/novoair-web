import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button'
import { CardModule } from 'primeng/card'

@Component({
    selector: 'app-co-brandeed-card',
    imports: [ButtonModule, CardModule],
    templateUrl: './co-brandeed-card.component.html',
    styleUrl: './co-brandeed-card.component.scss',
})
export class CoBrandeedCardComponent {}
