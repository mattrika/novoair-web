import { Component } from '@angular/core';
import { BookCardComponent } from "../../main/book-flight/components/book-card/book-card.component";
import { DestinationCardComponent } from "../../main/home/components/destination-card/destination-card.component";
import { GetOurAppComponent } from "../../main/home/components/get-our-app/get-our-app.component";

@Component({
  selector: 'app-book-flight',
  imports: [DestinationCardComponent, GetOurAppComponent, BookCardComponent],
  templateUrl: './book-flight.component.html',
  styleUrl: './book-flight.component.scss'
})
export class BookFlightComponent {

}
