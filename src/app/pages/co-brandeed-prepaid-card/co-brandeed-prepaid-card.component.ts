import { Component } from '@angular/core';
import { CoBrandeedCardComponent } from "../../main/co-brandeed-prepaid-card/co-brandeed-card/co-brandeed-card.component";
import { CoBrandeedFaqComponent } from "../../main/co-brandeed-prepaid-card/co-brandeed-faq/co-brandeed-faq.component";

@Component({
  selector: 'app-co-brandeed-prepaid-card',
  imports: [CoBrandeedCardComponent, CoBrandeedFaqComponent],
  templateUrl: './co-brandeed-prepaid-card.component.html',
  styleUrl: './co-brandeed-prepaid-card.component.scss'
})
export class CoBrandeedPrepaidCardComponent {

}
