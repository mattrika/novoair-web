import { Component } from '@angular/core'
import { SmilesCardComponent } from '../../main/smiles-frequent-flyer/smiles-card/smiles-card.component'
import { SmilesFaqComponent } from '../../main/smiles-frequent-flyer/smiles-faq/smiles-faq.component'
import { CoBrandeedFaqComponent } from "../../main/co-brandeed-prepaid-card/co-brandeed-faq/co-brandeed-faq.component";

@Component({
    selector: 'app-smiles-frequent-flyer',
    imports: [SmilesFaqComponent, SmilesCardComponent, CoBrandeedFaqComponent],
    templateUrl: './smiles-frequent-flyer.component.html',
    styleUrl: './smiles-frequent-flyer.component.scss',
})
export class SmilesFrequentFlyerComponent {}
