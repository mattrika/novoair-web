import { ChangeDetectionStrategy, Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { FooterDefaultComponent } from '@main/footers/footer-default/footer-default.component'
import { HeaderDefaultComponent } from '../../headers/header-default/header-default.component'

@Component({
    selector: 'app-layout-default',
    imports: [RouterModule, FooterDefaultComponent, HeaderDefaultComponent],
    templateUrl: './layout-default.component.html',
    styleUrls: ['./layout-default.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutDefaultComponent {}
