import { Component } from '@angular/core';
import { DestinationCardComponent } from "../../main/home/components/destination-card/destination-card.component";
import { FareDealsComponent } from "../../main/home/components/fare-deals/fare-deals.component";
import { GetOurAppComponent } from "../../main/home/components/get-our-app/get-our-app.component";
import { HeroSectionComponent } from "../../main/home/components/hero-section/hero-section.component";
import { OngoingOffersCardComponent } from "../../main/home/components/ongoing-offers-card/ongoing-offers-card.component";
import { TravelGuidelineComponent } from "../../main/home/components/travel-guideline/travel-guideline.component";


@Component({
    selector: 'app-dashboard-home',
    imports: [
        HeroSectionComponent,
        DestinationCardComponent,
        OngoingOffersCardComponent,
        FareDealsComponent,
        TravelGuidelineComponent,
        GetOurAppComponent,
    ],
    templateUrl: './dashboard-home.component.html',
    styleUrl: './dashboard-home.component.scss',
})
export class DashboardHomeComponent {}
