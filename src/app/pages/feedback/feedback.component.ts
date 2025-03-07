import { Component } from '@angular/core'
import { FeedbackContentComponent } from "../../main/feedback/feedback-content/feedback-content.component";

@Component({
    selector: 'app-feedback',
    standalone: true,
    imports: [FeedbackContentComponent],
    templateUrl: './feedback.component.html',
    styleUrl: './feedback.component.scss',
})
export class FeedbackComponent {}
