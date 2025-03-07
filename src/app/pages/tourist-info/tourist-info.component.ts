import { Component } from '@angular/core'
import { TouristContentComponent } from "../../main/tourist-info/tourist-content/tourist-content.component";

@Component({
    selector: 'app-tourist-info',
    imports: [TouristContentComponent],
    templateUrl: './tourist-info.component.html',
    styleUrl: './tourist-info.component.scss',
})
export class TouristInfoComponent {}
