import { Component } from '@angular/core';
import { TouristImageGalleryComponent } from "../tourist-image-gallery/tourist-image-gallery.component";
import { TouristTipsGuideComponent } from "../tourist-tips-guide/tourist-tips-guide.component";

@Component({
  selector: 'app-tourist-content',
  imports: [TouristImageGalleryComponent, TouristTipsGuideComponent],
  templateUrl: './tourist-content.component.html',
  styleUrl: './tourist-content.component.scss'
})
export class TouristContentComponent {

}
