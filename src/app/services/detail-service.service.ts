import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor(private HTTP: HttpClient) {

  }

  charSelected: EventEmitter<number> = new EventEmitter();

  setCharSelected(value: number) {
    this.charSelected.emit(value);
  }

  getDetailsForCharacterByID(id:number){
    return this.HTTP.get('https://rickandmortyapi.com/api/character/'+id)
  }


}
