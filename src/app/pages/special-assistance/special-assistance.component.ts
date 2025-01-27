import { Component } from '@angular/core'
import { NovoneelNovoairComponent } from '../../main/novoneel-novoair/novoneel-novoair.component'
import { SpecialAssistanceContentComponent } from '../../main/special-assistance/special-assistance-content/special-assistance-content.component'

@Component({
    selector: 'app-special-assistance',
    imports: [SpecialAssistanceContentComponent, NovoneelNovoairComponent],
    templateUrl: './special-assistance.component.html',
    styleUrl: './special-assistance.component.scss',
})
export class SpecialAssistanceComponent {}
