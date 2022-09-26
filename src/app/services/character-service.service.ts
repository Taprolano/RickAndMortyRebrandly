import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private HTTP: HttpClient) {
  }

  getCharactersListByPage(pageNum: number): any {
    return this.HTTP.get('https://rickandmortyapi.com/api/character?page='+pageNum)
  }

}
