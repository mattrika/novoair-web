import { Component } from '@angular/core'

@Component({
    selector: 'app-fare-deals',
    imports: [],
    templateUrl: './fare-deals.component.html',
    styleUrl: './fare-deals.component.scss',
})
export class FareDealsComponent {
    cards = [
        { image: 'assets/images/ctg.png', title: 'Chattogram', price: 'BDT: 5000' },
        { image: 'assets/images/coxs.png', title: "Cox's Bazar", price: 'BDT: 5000' },
        { image: 'assets/images/slht.png', title: 'Sylhet', price: 'BDT: 5000' },
        { image: 'assets/images/bar.png', title: 'Barishal', price: 'BDT: 5000' },
        { image: 'assets/images/jes.png', title: 'Jessore', price: 'BDT: 5000' },
        { image: 'assets/images/say.png', title: 'Sayedpur', price: 'BDT: 5000' },
        { image: 'assets/images/raj.png', title: 'Rajshahi', price: 'BDT: 5000' },
        { image: 'assets/images/kol.png', title: 'Kolkata', price: 'BDT: 5000' },
    ]
}
