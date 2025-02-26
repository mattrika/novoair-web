import { Component } from '@angular/core'
import { FaqContentComponent } from '../../main/faq-content/faq-content.component'

@Component({
    selector: 'app-faq',
    imports: [FaqContentComponent],
    templateUrl: './faq.component.html',
    styleUrl: './faq.component.scss',
})
export class FaqComponent {}
