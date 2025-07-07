import { Component, OnInit } from '@angular/core';
import { MandiService } from 'src/app/services/mandi.service';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle,
  IonCardContent, IonGrid, IonRow, IonCol, IonSelect, IonSelectOption, IonButton,
  IonList, IonItem, IonLabel, IonText
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-market-prices',
  templateUrl: './market-prices.component.html',
  styleUrls: ['./market-prices.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonGrid,
    IonRow,
    IonCol,
    IonSelect,
    IonSelectOption,
    IonButton,
    IonList,
    IonItem,
    IonLabel,
    IonText
  ]
})
export class MarketPricesComponent implements OnInit {
  selectedCommodity = '';
  selectedState = '';
  marketRates: any[] = [];

  commodities: string[] = [];
  states: string[] = [];

  constructor(private mandiService: MandiService) {}

  ngOnInit(): void {
    this.loadDropdownData();
  }

  loadDropdownData() {
    this.mandiService.getAllData().subscribe(data => {
  const records = data.records as Array<{ commodity: string; state: string }>;

  this.commodities = [...new Set(records.map(r => r.commodity))].sort();
  this.states = [...new Set(records.map(r => r.state))].sort();

  this.selectedCommodity ||= this.commodities[0];
  this.selectedState ||= this.states[0];

  this.searchPrices();
});
  }

  searchPrices() {
    this.mandiService
      .getPrices(this.selectedCommodity, this.selectedState, 10)
      .subscribe((data: any) => {
        this.marketRates = data.records;
        console.log('Rates:', this.marketRates);
      });
  }
}
