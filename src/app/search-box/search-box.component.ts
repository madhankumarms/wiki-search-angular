import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
})
export class SearchBoxComponent implements OnInit {
  @Output() submitted = new EventEmitter<string>();

  searchQuery = '';

  constructor() {}

  ngOnInit(): void {}

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.searchQuery = value;
  }

  onFormSubmit(event: any) {
    event.preventDefault();
    this.submitted.emit(this.searchQuery);
  }
}
