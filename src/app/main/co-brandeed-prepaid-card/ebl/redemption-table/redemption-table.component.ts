import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { TableModule } from 'primeng/table'

interface Domestic {
    domestic: string
    oneWay: string
}

interface International {
    international: string
    oneWay: string
}

@Component({
  selector: 'app-redemption-table',
  imports: [TableModule, CommonModule],
  templateUrl: './redemption-table.component.html',
  styleUrl: './redemption-table.component.scss'
})
export class RedemptionTableComponent {
 domestic: Domestic[] = [
        { domestic: 'Dhaka to Barishal&nbsp;&nbsp;&nbsp;&nbsp;Barishal to Dhaka', oneWay: '600' },
        {
            domestic: 'Dhaka to Chattogram&nbsp;&nbsp;&nbsp;&nbsp;Chattogram to Dhaka',
            oneWay: '1,000',
        },
        { domestic: 'Dhaka to Jashore&nbsp;&nbsp;&nbsp;&nbsp;Jashore to Dhaka', oneWay: '1,000' },
        { domestic: 'Dhaka to Sylhet&nbsp;&nbsp;&nbsp;&nbsp;Sylhet to Dhaka', oneWay: '1,000' },
        { domestic: 'Dhaka to Rajshahi&nbsp;&nbsp;&nbsp;&nbsp;Rajshahi to Dhaka', oneWay: '800' },
        {
            domestic: 'Dhaka to Cox’s Bazar&nbsp;&nbsp;&nbsp;&nbsp;Cox’s Bazar to Dhaka',
            oneWay: '1,500',
        },
        { domestic: 'Dhaka to Saidpur&nbsp;&nbsp;&nbsp;&nbsp;Saidpur to Dhaka', oneWay: '1,500' },
    ]

    international: International[] = [
        {
            international: 'Dhaka to Kolkata&nbsp;&nbsp;&nbsp;&nbsp;Kolkata to Dhaka',
            oneWay: '1,500',
        },
    ]
}
