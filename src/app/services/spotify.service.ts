import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
    
    

  }

  getQuery(query : string ){

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAdYiOxkzN8VnfaYE7_q1MTyQg4iKC8yWwvxE2mLrJtGZk1OyluG8MtuwcFehmHW42zGk5jBv5YbGM_erw'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases(){

    return this.getQuery('browse/new-releases')
                .pipe( map( data => data['albums'].items));
             
  }

  getArtista(termino: string){

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
               .pipe(map(data => data['artists'].items));
  }
}
