import { Component, OnInit } from '@angular/core';
import {BikeService} from '../../services/bike.service';
import {TableModule} from 'primeng/table';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public bikes;

  constructor(private bikeSvc: BikeService) { }

  ngOnInit(): void {
    this.getBikes();
  }

  getBikes(){
    this.bikeSvc.getBikes().subscribe(
      data => {this.bikes = data},
      err => console.log('Error'),
      () => console.log('Bikes loaded')
    );
  }

}
