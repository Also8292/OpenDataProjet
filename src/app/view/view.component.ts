import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Router, ActivatedRoute} from '@angular/router';

// declare variable
declare let L;

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  sites: any;
  id: any;
  lat: any;
  long: any;
  constructor(private dataService: DataService, private  activateRoote: ActivatedRoute) {
    this.getSite();
  }
  getSite() {}

  ngOnInit() {

    this.dataService.getSite()
      .then(data => {
        Array.of(data).forEach((item, index) => {
          let count = Object.keys(item).length;
          
          for (let i = 0; i < count; i++) {
            const img = item[i]['image'];
            const marker = new L.Marker(new L.LatLng(item[i]['latitude'], item[i]['longitude']));
            marker.addTo(map).bindPopup('<h4 style="font-family: Script MT Bold">' + item[i]['nom'] + '<br><br> <img class="card-img" src="https://alious.promo-21.codeur.online/senegal-patrimoine/public/uploads/images/site/' + img + '"></h4><p style="font-size: medium; font-family: Script MT Bold">' + item[i]['description'] + '</p>');
          }
        });
      });


    this.activateRoote.params.subscribe(params => {
      if (typeof params['id'] !== undefined) {
        this.id = params['id'];
        console.log(this.id);
      } else { this.id = ''; }
      if (typeof params['lat'] !== undefined) {
        this.lat = params['lat'];
        console.log(this.lat);
      } else { this.lat = ''; }
      if (typeof params['long'] !== undefined) {
        this.long = params['long'];
        console.log(this.long);
      } else { this.long = ''; }
    });

    const map = L.map('map').setView([this.lat, this.long], 11);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: ''
    }).addTo(map);

    // add circle
    const circle = new L.Circle(new L.LatLng(this.lat, this.long), 26000, {
      color: '#ffc121',
      fillColor: 'red',
      fillOpacity: 0.15
    }).addTo(map);
  }
}



