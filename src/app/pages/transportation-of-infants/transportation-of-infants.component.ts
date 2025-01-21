import { Component } from '@angular/core';
import { NovoneelNovoairComponent } from "../../main/novoneel-novoair/novoneel-novoair.component";
import { TransportationOfInfantsContentComponent } from "../../main/transportation-of-infants/transportation-of-infants-content/transportation-of-infants-content.component";

@Component({
  selector: 'app-transportation-of-infants',
  imports: [NovoneelNovoairComponent, TransportationOfInfantsContentComponent],
  templateUrl: './transportation-of-infants.component.html',
  styleUrl: './transportation-of-infants.component.scss'
})
export class TransportationOfInfantsComponent {

}
