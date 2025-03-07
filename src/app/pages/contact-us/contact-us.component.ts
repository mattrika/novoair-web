import { Component } from '@angular/core'
import { AllSalesOfficesComponent } from "../../main/sales-offices/all-sales-offices/all-sales-offices.component";

@Component({
    selector: 'app-contact-us',
    imports: [AllSalesOfficesComponent],
    templateUrl: './contact-us.component.html',
    styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {}
