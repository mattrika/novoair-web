import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'

@Component({
    selector: 'app-footer-default',
    imports: [RouterLink],
    templateUrl: './footer-default.component.html',
    styleUrl: './footer-default.component.scss',
})
export class FooterDefaultComponent {
     bankPartners = [
        'assets/images/pay/1.png',
        'assets/images/pay/2.png',
        'assets/images/pay/3.png',
        'assets/images/pay/4.png',
        'assets/images/pay/5.png',
        'assets/images/pay/6.png',
        'assets/images/pay/7.png',
        'assets/images/pay/8.png',
        'assets/images/pay/9.png',
        'assets/images/pay/10.png',
        'assets/images/pay/11.png',
        'assets/images/pay/12.png',
        'assets/images/pay/13.png',
        'assets/images/pay/14.png',
        'assets/images/pay/15.png',
        'assets/images/pay/16.png',
        'assets/images/pay/17.png',
        'assets/images/pay/18.png',
        'assets/images/pay/19.png',
        'assets/images/pay/20.png',
    ]
}
