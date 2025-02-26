import { Component } from '@angular/core'
import { AccordionModule } from 'primeng/accordion'

@Component({
    selector: 'app-faq-content',
    imports: [AccordionModule],
    templateUrl: './faq-content.component.html',
    styleUrl: './faq-content.component.scss',
})
export class FaqContentComponent {}
