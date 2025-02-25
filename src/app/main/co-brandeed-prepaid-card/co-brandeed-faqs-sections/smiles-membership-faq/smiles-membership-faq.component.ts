import { Component } from '@angular/core';

@Component({
  selector: 'app-smiles-membership-faq',
  imports: [],
  templateUrl: './smiles-membership-faq.component.html',
  styleUrl: './smiles-membership-faq.component.scss'
})
export class SmilesMembershipFaqComponent {
 openMail() {
    window.location.href = 'mailto:smiles@flynovoair.com';
}
}
