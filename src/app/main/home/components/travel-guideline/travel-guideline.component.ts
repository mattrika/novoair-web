import { Component } from '@angular/core'

@Component({
    selector: 'app-travel-guideline',
    imports: [],
    templateUrl: './travel-guideline.component.html',
    styleUrl: './travel-guideline.component.scss',
})
export class TravelGuidelineComponent {
    guidelines = [
        {
            image: 'assets/images/guideline-1.png',
            title: 'All in Online',
            description:
                'Before you travel, make sure you have all the necessary documents and information.',
        },
        {
            image: 'assets/images/guideline-2.png',
            title: 'Help Center',
            description: 'Search and find useful information to solve your questions.',
        },
        {
            image: 'assets/images/guideline-3.png',
            title: 'Travel Requirements',
            description: 'Find out about visas, vaccinations and other documents.',
        },
    ]
}
