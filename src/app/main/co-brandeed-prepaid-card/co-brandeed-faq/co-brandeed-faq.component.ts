import { Component } from '@angular/core'
import { AccordionModule } from 'primeng/accordion'
import { EarningMilesFaqComponent } from '../co-brandeed-faqs-sections/earning-miles-faq/earning-miles-faq.component'
import { PrivacyFaqComponent } from '../co-brandeed-faqs-sections/privacy-faq/privacy-faq.component'
import { RewardsFaqComponent } from '../co-brandeed-faqs-sections/rewards-faq/rewards-faq.component'
import { SmilesMembershipFaqComponent } from '../co-brandeed-faqs-sections/smiles-membership-faq/smiles-membership-faq.component'
import { TiersBenefitsFaqComponent } from '../co-brandeed-faqs-sections/tiers-benefits-faq/tiers-benefits-faq.component'
import { TiersStatusPoliciesFaqComponent } from '../co-brandeed-faqs-sections/tiers-status-policies-faq/tiers-status-policies-faq.component'

@Component({
    selector: 'app-co-brandeed-faq',
    imports: [
        AccordionModule,
        SmilesMembershipFaqComponent,
        EarningMilesFaqComponent,
        TiersStatusPoliciesFaqComponent,
        TiersBenefitsFaqComponent,
        RewardsFaqComponent,
        PrivacyFaqComponent,
    ],
    templateUrl: './co-brandeed-faq.component.html',
    styleUrl: './co-brandeed-faq.component.scss',
})
export class CoBrandeedFaqComponent {}
