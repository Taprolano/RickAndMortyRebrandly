import {Component, OnInit} from '@angular/core';
import {DetailService} from "../../services/detail-service.service";

@Component({
  selector: 'modal-view',
  templateUrl: './modal-view.component.html',
  styleUrls: ['./modal-view.component.css']
})
export class ModalViewComponent implements OnInit {


  currentData: any = null;

  constructor(private detailService: DetailService) {
    this.detailService.charSelected.subscribe((data) => {
      this.detailService.getDetailsForCharacterByID(data).subscribe((data) => {
        this.currentData=data;
      })
    });
  }

  ngOnInit(): void {
  }

}
