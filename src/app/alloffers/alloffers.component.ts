import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataService } from '../../data.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-alloffers',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './alloffers.component.html',
  styleUrls: ['./alloffers.component.css']
})
export class AlloffersComponent implements OnInit {
  allOffers: any 
  offers: any 

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
    this.offers = this.dataService.getoffers();
  }

}
