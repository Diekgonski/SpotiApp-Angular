import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  paises: any [] = [];
  nuevasCanciones: any [] = [];

  constructor( private spotify: SpotifyService ) { 

    spotify.getNewReleases()
           .subscribe( (respuesta: any) => {
            console.log(respuesta);
            this.nuevasCanciones = respuesta;


           });
  }


}
