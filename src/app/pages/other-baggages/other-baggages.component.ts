import { Component } from '@angular/core';
import { NovoneelNovoairComponent } from "../../main/novoneel-novoair/novoneel-novoair.component";
import { OtherBaggagesContentComponent } from "../../main/other-baggages/other-baggages-content/other-baggages-content.component";

@Component({
  selector: 'app-other-baggages',
  imports: [NovoneelNovoairComponent, OtherBaggagesContentComponent],
  templateUrl: './other-baggages.component.html',
  styleUrl: './other-baggages.component.scss'
})
export class OtherBaggagesComponent {

}
