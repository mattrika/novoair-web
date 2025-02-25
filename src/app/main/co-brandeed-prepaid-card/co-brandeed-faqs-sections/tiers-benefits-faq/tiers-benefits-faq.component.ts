import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

interface MemberBenefitsPrivileges {
  memberBenefits: string;
  basic: string;
  sapphire:string;
  platinum: string;
}

@Component({
  selector: 'app-tiers-benefits-faq',
  imports: [TableModule, CommonModule],
  templateUrl: './tiers-benefits-faq.component.html',
  styleUrl: './tiers-benefits-faq.component.scss'
})
export class TiersBenefitsFaqComponent {
memberBenefitsPrivileges: MemberBenefitsPrivileges[] = [
    { memberBenefits: 'Redeem NOVOAIR Tickets with SMILES Miles online', basic: '✔',sapphire:'✔', platinum: '✔'},
    { memberBenefits: 'Bonus SMILES Miles when flying NOVOAIR', basic: '',sapphire:'✔', platinum: '✔'},
    { memberBenefits: 'Excess baggage allowances', basic: '',sapphire:'Additional 10 KG.', platinum: 'Additional 15 KG.'},
    { memberBenefits: 'Priority service through our Sales Counters', basic: '',sapphire:'', platinum: '✔'},
    { memberBenefits: 'Priority check in and boarding', basic: '',sapphire:'', platinum: '✔'}
  ];
}
