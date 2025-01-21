import { Component } from '@angular/core';
import { ExpectantMotherContentComponent } from "../../main/expectant-mother/expectant-mother-content/expectant-mother-content.component";
import { NovoneelNovoairComponent } from "../../main/novoneel-novoair/novoneel-novoair.component";

@Component({
  selector: 'app-expectant-mother',
  imports: [ExpectantMotherContentComponent, NovoneelNovoairComponent],
  templateUrl: './expectant-mother.component.html',
  styleUrl: './expectant-mother.component.scss'
})
export class ExpectantMotherComponent {

}
