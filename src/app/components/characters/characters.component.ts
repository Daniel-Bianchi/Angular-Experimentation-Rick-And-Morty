import { Component, OnInit } from '@angular/core';
import { RickAndMortyApiService } from 'src/app/services/rick-and-morty-api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  characters!: any[];

  constructor(private rickAndMortyApi: RickAndMortyApiService) { }

  ngOnInit(): void {
    this.rickAndMortyApi.getCharacters().subscribe(data => {
      this.characters = data.results;
    });
  }
}
