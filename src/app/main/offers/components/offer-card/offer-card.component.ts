import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'

@Component({
    selector: 'app-offer-card',
    imports: [RouterModule],
    templateUrl: './offer-card.component.html',
    styleUrl: './offer-card.component.scss',
})
export class OfferCardComponent {
    webOffers = [
        {
            imageUrl: 'assets/images/offers/1.jpg',
            title: '10% Discount from website & mobile app',
            route: '/offers/web',
        },
        {
            imageUrl: 'assets/images/offers/2.jpg',
            title: '10% Discount on base fare for Standard Chartered Bank cardholder',
            route: '/offers/standard-chartered',
        },
        {
            imageUrl: 'assets/images/offers/3.jpg',
            title: '10% DISCOUNT on base fare for BRAC Bank cardholder',
            route: '/offers/brac',
        },
        {
            imageUrl: 'assets/images/offers/4.jpg',
            title: '10% Discount on base fare for EBL Bank cardholder',
            route: '/offers/ebl',
        },
        {
            imageUrl: 'assets/images/offers/5.jpg',
            title: '10% Discount on base fare for City Bank cardholder',
            route: '/offers/city',
        },
        {
            imageUrl: 'assets/images/offers/6.jpg',
            title: '10% Discount on base fare for UCB Bank cardholder',
            route: '/offers/ucb',
        },
    ]
    counterOffers = [
        {
            imageUrl: 'assets/images/offers/7.jpg',
            title: '10% Discount on base fare for SMILES Members',
            route: '/smiles-frequent-flyer',
        },
        {
            imageUrl: 'assets/images/offers/8.jpg',
            title: '10% Discount on base fare for GP STAR Members',
            route: '/offers/gp-star',
        },
        {
            imageUrl: 'assets/images/offers/9.jpg',
            title: '10% Discount on base fare for NAGAD members',
            route: '/offers/nagad',
        },
    ]
}
