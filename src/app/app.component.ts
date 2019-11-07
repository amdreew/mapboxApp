import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import * as Mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  mapa: Mapboxgl.Map;
  ngOnInit(): void{

    (Mapboxgl as any).accessToken = environment.mapboxkey;
    this.mapa = new Mapboxgl.Map({
      container: 'mapa', 
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-75.4988958 , 10.3797794], // SISTEMA DE COORDENADAS POR DEFECTO LONGITUD - LATITUD
      zoom: 17     
    });
    this.marker(-75.4988958 , 10.3797794) ;
  }

  marker(LONG: number, LAT: number): void {
    const marker = new Mapboxgl.Marker({
      draggable: true
      })
      .setLngLat([LONG, LAT])
      .addTo(this.mapa);
      marker.on('drag', () => {
        console.log(marker.getLngLat())
      })
  }

}
