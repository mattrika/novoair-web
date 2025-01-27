import { Component } from '@angular/core'
import { DomesticTravelDocumentsContentComponent } from '../../main/domestic-travel-documents/domestic-travel-documents-content/domestic-travel-documents-content.component'
import { NovoneelNovoairComponent } from '../../main/novoneel-novoair/novoneel-novoair.component'

@Component({
    selector: 'app-domestic-travel-documents',
    imports: [DomesticTravelDocumentsContentComponent, NovoneelNovoairComponent],
    templateUrl: './domestic-travel-documents.component.html',
    styleUrl: './domestic-travel-documents.component.scss',
})
export class DomesticTravelDocumentsComponent {}
