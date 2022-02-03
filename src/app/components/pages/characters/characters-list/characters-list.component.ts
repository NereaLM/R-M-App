import { DataService } from './../../../../shared/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {

  constructor(private dataSvc: DataService) { }

  ngOnInit(): void {
    this.dataSvc.getDataAPI();
  }

}
