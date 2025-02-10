import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-offer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css'],
})
export class OfferComponent implements OnInit {
  selectedOffer: any = null;
  offers:any;
  @Input() offer:any;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute

  ) {}

  ngOnInit(): void {
    this.offers = this.dataService.getoffers();
    const offerId = +this.route.snapshot.paramMap.get('id')!;
    this.selectedOffer = this.offers.find((offer: { id: number; }) => offer.id === offerId);
  }
}
