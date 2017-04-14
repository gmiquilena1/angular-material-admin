import { Component, OnInit} from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  rows: any[];
  columns: any[];
  selected = [];
  loadingIndicator: boolean = true;

  constructor(private _http:Http) { }

  ngOnInit() {

    this._http.get('http://api.tvmaze.com/shows')
    .map((response)=> response.json())
    .subscribe((data) => {
      this.rows = data;
      this.loadingIndicator = false;
    });

    
    this.columns = [
      { prop: 'name' },
      { prop: 'type' },
      { prop: 'status' },
      { prop: 'runtime' }
    ];
  }

  onSelect({selected}){
    console.log(selected);
  }

}
