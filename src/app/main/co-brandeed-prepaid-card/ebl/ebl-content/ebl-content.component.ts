import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'
import { FareFamilyWiseTableComponent } from "../fare-family-wise-table/fare-family-wise-table.component";
import { RedemptionTableComponent } from "../redemption-table/redemption-table.component";
import { HowToApplyComponent } from "../how-to-apply/how-to-apply.component";
import { CardActivationComponent } from "../card-activation/card-activation.component";
import { EblFaqComponent } from "../ebl-faq/ebl-faq.component";

@Component({
  selector: 'app-ebl-content',
  imports: [RouterLink, FareFamilyWiseTableComponent, RedemptionTableComponent, HowToApplyComponent, CardActivationComponent, EblFaqComponent],
  templateUrl: './ebl-content.component.html',
  styleUrl: './ebl-content.component.scss'
})
export class EblContentComponent {
    openMail() {
        window.location.href = "mailto:smiles@flynovoair.com";
    }
}
