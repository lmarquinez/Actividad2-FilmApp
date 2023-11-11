import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css'],
})

export class FilmCardComponent {

  @Input() movie: any;

  getBackground() {
    return {
      'background-image': `url(${this.movie.img})`,
      'background-size': 'cover',
      'height': '190px',
      'width': '150px',
      'margin-right': '15px',
      'align-self': 'center'
    };
  }

}
