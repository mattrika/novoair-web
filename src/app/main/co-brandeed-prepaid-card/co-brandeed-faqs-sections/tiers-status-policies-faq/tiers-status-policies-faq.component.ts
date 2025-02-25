import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

interface TireStatus {
  memberShip: string;
  basic: string;
  sapphire:string;
  platinum: string;
}

@Component({
  selector: 'app-tiers-status-policies-faq',
  imports: [TableModule, CommonModule],
  templateUrl: './tiers-status-policies-faq.component.html',
  styleUrl: './tiers-status-policies-faq.component.scss'
})
export class TiersStatusPoliciesFaqComponent {
tireStatus: TireStatus[] = [
    { memberShip: 'Qualification', basic: 'FFP Enrolment',sapphire:'600 SMILE SMiles', platinum: '5,000 SMILES Miles'},
    { memberShip: 'SMILES Miles Eligibility Period for status upgrades', basic: '-',sapphire:'6 Months', platinum: '1 Years'},
    { memberShip: 'SMILES Miles Validity for Redeeming Rewards', basic: '3 Years',sapphire:'3 Years', platinum: '3 Years'},
    { memberShip: 'SMILES Card Validity', basic: 'E-Card',sapphire:'Hard Copy Printed Card', platinum: '-'},
    { memberShip: 'Tier-expiration', basic: '-',sapphire:'2 Years', platinum: '2 Years'},
  ];
}
