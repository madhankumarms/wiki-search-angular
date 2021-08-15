import { Component, OnInit, Input } from '@angular/core';

interface pageResponse {
  title: string;
  wordcount: number;
  snippet: string;
  pageid: number;
  timestamp: number;
  ns: number;
}

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent implements OnInit {
  @Input() pages: pageResponse[] = [];
  pagesToView = 4;

  constructor() {}

  ngOnInit(): void {}

  onShowMorePages() {
    const length = this.pages.length;
    if (this.pagesToView <= length) {
      this.pagesToView += this.pagesToView;
    } else {
      this.pagesToView = length;
    }
  }
}
