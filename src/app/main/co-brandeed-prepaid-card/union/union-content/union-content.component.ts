import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { FareFamilyWiseTableComponent } from '../../ebl/fare-family-wise-table/fare-family-wise-table.component'
import { RedemptionTableComponent } from '../../ebl/redemption-table/redemption-table.component'
import { UnionFaqComponent } from '../union-faq/union-faq.component'

@Component({
    selector: 'app-union-content',
    imports: [
        RouterLink,
        FareFamilyWiseTableComponent,
        RedemptionTableComponent,
        UnionFaqComponent,
    ],
    templateUrl: './union-content.component.html',
    styleUrl: './union-content.component.scss',
})
export class UnionContentComponent {
    openMail() {
        window.location.href = 'mailto:smiles@flynovoair.com'
    }
}
