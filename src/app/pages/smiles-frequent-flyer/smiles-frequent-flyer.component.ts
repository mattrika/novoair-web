import { Component } from '@angular/core'
import { SmilesCardComponent } from '../../main/smiles-frequent-flyer/smiles-card/smiles-card.component'
import { SmilesFaqComponent } from '../../main/smiles-frequent-flyer/smiles-faq/smiles-faq.component'

@Component({
    selector: 'app-smiles-frequent-flyer',
    imports: [SmilesFaqComponent, SmilesCardComponent],
    templateUrl: './smiles-frequent-flyer.component.html',
    styleUrl: './smiles-frequent-flyer.component.scss',
})
export class SmilesFrequentFlyerComponent {}
