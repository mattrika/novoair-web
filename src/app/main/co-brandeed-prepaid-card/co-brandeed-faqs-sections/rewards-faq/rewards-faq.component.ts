import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

interface DomesticRewards {
  domestic: string;
  oneWay: string;
}

interface InternationalRewards {
  international: string;
  oneWay: string;
}

@Component({
  selector: 'app-rewards-faq',
  imports: [TableModule, CommonModule],
  templateUrl: './rewards-faq.component.html',
  styleUrl: './rewards-faq.component.scss'
})
export class RewardsFaqComponent {
domesticRewards: DomesticRewards[] = [
    { domestic: 'Dhaka to Barishal&nbsp;&nbsp;&nbsp;&nbsp;Barishal to Dhaka', oneWay: '600' },
    { domestic: 'Dhaka to Chattogram&nbsp;&nbsp;&nbsp;&nbsp;Chattogram to Dhaka', oneWay: '1,000' },
    { domestic: 'Dhaka to Jashore&nbsp;&nbsp;&nbsp;&nbsp;Jashore to Dhaka', oneWay: '1,000' },
    { domestic: 'Dhaka to Sylhet&nbsp;&nbsp;&nbsp;&nbsp;Sylhet to Dhaka', oneWay: '1,000' },
    { domestic: 'Dhaka to Rajshahi&nbsp;&nbsp;&nbsp;&nbsp;Rajshahi to Dhaka', oneWay: '800' },
    { domestic: 'Dhaka to Cox’s Bazar&nbsp;&nbsp;&nbsp;&nbsp;Cox’s Bazar to Dhaka', oneWay: '1,500' },
    { domestic: 'Dhaka to Saidpur&nbsp;&nbsp;&nbsp;&nbsp;Saidpur to Dhaka', oneWay: '1,500' }
  ];

internationalRewards: InternationalRewards[] = [
    { international: 'Dhaka to Kolkata&nbsp;&nbsp;&nbsp;&nbsp;Kolkata to Dhaka', oneWay: '1,500'}
  ];
}
