import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
    `img {
      width: 25px;
    }`
  ]
})
export class ByRegionPageComponent {
  public countries: Country[] = [];

  constructor(private countriesService:CountriesService){}

  searchByRegion(region: string): void {
    this.countriesService.searchRegion(region)
    .subscribe( countries =>  {
      this.countries = countries;
    });
  }

}
