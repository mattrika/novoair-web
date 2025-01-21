import { Component } from '@angular/core';
import { SportsContentComponent } from "../../main/sports-gears/sports-content/sports-content.component";
import { NovoneelNovoairComponent } from "../../main/novoneel-novoair/novoneel-novoair.component";

@Component({
  selector: 'app-sports-gears',
  imports: [SportsContentComponent, NovoneelNovoairComponent],
  templateUrl: './sports-gears.component.html',
  styleUrl: './sports-gears.component.scss'
})
export class SportsGearsComponent {

}
