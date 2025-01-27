import { Component } from '@angular/core'
import { ArmsAmmunationContentComponent } from '../../main/arms-ammunition/arms-ammunation-content/arms-ammunation-content.component'
import { NovoneelNovoairComponent } from '../../main/novoneel-novoair/novoneel-novoair.component'

@Component({
    selector: 'app-arms-ammunition',
    imports: [NovoneelNovoairComponent, ArmsAmmunationContentComponent],
    templateUrl: './arms-ammunition.component.html',
    styleUrl: './arms-ammunition.component.scss',
})
export class ArmsAmmunitionComponent {}
