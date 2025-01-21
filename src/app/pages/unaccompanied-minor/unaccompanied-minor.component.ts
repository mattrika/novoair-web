import { Component } from '@angular/core'
import { NovoneelNovoairComponent } from '../../main/novoneel-novoair/novoneel-novoair.component'
import { UnaccompaniedMinorContentComponent } from '../../main/unaccompanied-minor/unaccompanied-minor-content/unaccompanied-minor-content.component'

@Component({
    selector: 'app-unaccompanied-minor',
    imports: [UnaccompaniedMinorContentComponent, NovoneelNovoairComponent],
    templateUrl: './unaccompanied-minor.component.html',
    styleUrl: './unaccompanied-minor.component.scss',
})
export class UnaccompaniedMinorComponent {}
