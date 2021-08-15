import { Component, OnDestroy } from '@angular/core';
import { WikipediaService } from './wikipedia.service';
import { add } from 'sample-private-repo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pages = [];
  searched = false;

  constructor(private wikipedia: WikipediaService) {
    console.log(add(2, 3));
  }

  onQuery(searchQuery: string) {
    this.wikipedia.search(searchQuery).subscribe((results: any) => {
      this.pages = results.query.search;
    });
  }
}
