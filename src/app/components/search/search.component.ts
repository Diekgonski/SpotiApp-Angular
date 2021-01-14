import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{

  artistas: any [] = [];

  constructor(private spotify: SpotifyService) { 

  }

  buscarArtista(termino: string){
    this.spotify.getArtista(termino)
                .subscribe((respuesta: any) => {
                  this.artistas = respuesta;
                });
  }

}
