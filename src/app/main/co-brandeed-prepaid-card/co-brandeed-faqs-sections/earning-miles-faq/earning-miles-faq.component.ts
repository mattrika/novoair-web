import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { TableModule } from 'primeng/table'

interface FlightDataDomestic {
    destination: string
    specialPromo: number
    promo: number
    special: number
    discounted: number
    saver: number
    flexible: number
}

interface FlightDataInternational {
    destination: string
    promo: number
    excursion: number
    discounted: number
    saver: number
    flexible: number
}

interface FlightDataBonuMiles {
    bonusMiles: string
    basic: string
    sapphire: string
    platinum: string
}

@Component({
    selector: 'app-earning-miles-faq',
    imports: [TableModule, CommonModule],
    templateUrl: './earning-miles-faq.component.html',
    styleUrl: './earning-miles-faq.component.scss',
})
export class EarningMilesFaqComponent {
    FlightDataDomestic: FlightDataDomestic[] = [
        {
            destination: 'Jashore (JSR)',
            specialPromo: 23,
            promo: 46,
            special: 69,
            discounted: 92,
            saver: 106,
            flexible: 115,
        },
        {
            destination: 'Sylhet (ZYL)',
            specialPromo: 30,
            promo: 60,
            special: 90,
            discounted: 120,
            saver: 138,
            flexible: 150,
        },
        {
            destination: 'Chattogram (CGP)',
            specialPromo: 36,
            promo: 72,
            special: 107,
            discounted: 143,
            saver: 164,
            flexible: 179,
        },
        {
            destination: 'Cox’s Bazar (CXB)',
            specialPromo: 49,
            promo: 98,
            special: 146,
            discounted: 195,
            saver: 224,
            flexible: 244,
        },
        {
            destination: 'Saidpur (SPD)',
            specialPromo: 43,
            promo: 86,
            special: 128,
            discounted: 171,
            saver: 197,
            flexible: 214,
        },
        {
            destination: 'Rajshahi (RJH)',
            specialPromo: 31,
            promo: 62,
            special: 92,
            discounted: 123,
            saver: 141,
            flexible: 154,
        },
        {
            destination: 'Barishal (BZL)',
            specialPromo: 18,
            promo: 35,
            special: 53,
            discounted: 70,
            saver: 81,
            flexible: 88,
        },
    ]

    FlightDataInternational: FlightDataInternational[] = [
        {
            destination: 'Kolkata (CCU)',
            promo: 66,
            excursion: 66,
            discounted: 98,
            saver: 131,
            flexible: 164,
        },
    ]

    FlightDataBonuMiles: FlightDataBonuMiles[] = [
        { bonusMiles: 'Tier Status', basic: 'x1.00', sapphire: 'x1.10', platinum: 'x1.15' },
        { bonusMiles: 'Web-Purchase', basic: '	x1.10', sapphire: 'x1.10', platinum: 'x1.10' },
        {
            bonusMiles: 'Ticket Class (Flexible)',
            basic: 'x1.25',
            sapphire: 'x1.25',
            platinum: 'x1.25',
        },
    ]
}
