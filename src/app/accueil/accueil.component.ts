import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Router} from '@angular/router';

// declare variable
declare let L;


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  regions: any;
  constructor(private dataService: DataService, private _route: Router) {
    this.getRegion();
  }
  getRegion() {
    this.dataService.getRegion()
      .then(data => {
        this.regions = data;
        console.log(this.regions);
      });
  }
  ngOnInit() {}
  onSelect(id, lat, long) {
    this._route.navigate(['/region', id, lat, long]);
  }
}
