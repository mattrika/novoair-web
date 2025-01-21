import { Component } from '@angular/core';
import { RequirementMedicalClearanceContentComponent } from "../../main/requirement-medical-clearance/requirement-medical-clearance-content/requirement-medical-clearance-content.component";
import { NovoneelNovoairComponent } from "../../main/novoneel-novoair/novoneel-novoair.component";

@Component({
  selector: 'app-requirement-medical-clearance',
  imports: [RequirementMedicalClearanceContentComponent, NovoneelNovoairComponent],
  templateUrl: './requirement-medical-clearance.component.html',
  styleUrl: './requirement-medical-clearance.component.scss'
})
export class RequirementMedicalClearanceComponent {

}
