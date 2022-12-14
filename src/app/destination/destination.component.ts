import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css'],
  providers: [NgbCarouselConfig]
})
export class DestinationComponent implements OnInit {
  images = [700, 800, 807].map((n) => `https://picsum.photos/id/${n}/900/500`);
 
  constructor(config: NgbCarouselConfig) {
  //
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {
  }

}
