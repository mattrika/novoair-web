import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion'

@Component({
    selector: 'app-smiles-faq',
    imports: [AccordionModule],
    templateUrl: './smiles-faq.component.html',
    styleUrl: './smiles-faq.component.scss',
})
export class SmilesFaqComponent {}
