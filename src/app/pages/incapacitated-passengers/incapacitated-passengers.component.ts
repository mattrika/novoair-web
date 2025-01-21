import { Component } from '@angular/core';
import { IncapacitatedPassengersContentComponent } from "../../main/incapacitated-passengers/incapacitated-passengers-content/incapacitated-passengers-content.component";
import { NovoneelNovoairComponent } from "../../main/novoneel-novoair/novoneel-novoair.component";

@Component({
  selector: 'app-incapacitated-passengers',
  imports: [IncapacitatedPassengersContentComponent, NovoneelNovoairComponent],
  templateUrl: './incapacitated-passengers.component.html',
  styleUrl: './incapacitated-passengers.component.scss'
})
export class IncapacitatedPassengersComponent {

}
