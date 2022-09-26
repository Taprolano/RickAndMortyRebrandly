import {Component, OnInit} from '@angular/core';
import {CharacterService} from "../../services/character-service.service";
import {DetailService} from "../../services/detail-service.service";

@Component({
  selector: 'table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {

  constructor(private characterService: CharacterService, private detailService: DetailService) {
  }

  characters: any[] = [];
  additionalData: any = null;
  currentPage: number = 1;

  ngOnInit(): void {
    this.characterService.getCharactersListByPage(this.currentPage).subscribe((data: any) => {
      this.characters = data.results;
      this.additionalData = data.info;
    });
  }

  nextPage(): void {
    this.currentPage++;
    this.characterService.getCharactersListByPage(this.currentPage).subscribe((data: any) => {
      this.characters = data.results;
      this.additionalData = data.info;
    });
  }

  prevPage(): void {
    this.currentPage--;
    this.characterService.getCharactersListByPage(this.currentPage).subscribe((data: any) => {
      this.characters = data.results;
      this.additionalData = data.info;
    });
  }

  seeDetails(id: number): void {
    this.detailService.setCharSelected(id);
  }

}
