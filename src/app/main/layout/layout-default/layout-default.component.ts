import { ChangeDetectionStrategy, Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { FooterDefaultComponent } from '@main/footers/footer-default/footer-default.component'
import { HeaderOneComponent } from '@main/headers/header-one/header-one.component'

@Component({
    selector: 'app-layout-default',
    imports: [RouterModule, HeaderOneComponent, FooterDefaultComponent],
    templateUrl: './layout-default.component.html',
    styleUrls: ['./layout-default.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutDefaultComponent {}
