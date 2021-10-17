import { Component, OnInit } from '@angular/core';
import { faDog, faCat} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { DataService } from './../../shared/service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faDog = faDog;
  faCat = faCat;
  searchZip: string = '';
  newsList: {img: String, des: String, src: String}[] = [
    {img: '', des: '', src: ''}
  ];

  constructor(private router: Router,
              private _dataService: DataService
    ) { }

  ngOnInit(): void {
    this.newsList = this._dataService.homepageNews;
  }

  searchByZip() {
    const zip = this.searchZip;
    this.router.navigate(['animal-list'], {queryParams:{zip}});
  }

  showDogList() {
    const species = 'dog';
    this.router.navigate(['animal-list'], {queryParams:{species}});
  }

  showCatList() {
    const species = 'cat'
    this.router.navigate(['animal-list'], {queryParams:{species}});
  }

}
