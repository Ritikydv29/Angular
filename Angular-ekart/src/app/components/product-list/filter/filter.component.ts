import { Component, Input, Output,OnInit,EventEmitter } from '@angular/core';


@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
@Input()
all: number = 0;
@Input()
instock: number = 0;
@Input()
outofstock: number = 0;

selectedCategory: string = 'all';

@Output()
onSelectionAvailabilityChange :EventEmitter<string> = new EventEmitter<string>();
onAvailabilityChange(){
  // console.log('Availability changed:', this.selectedCategory);
  this.onSelectionAvailabilityChange.emit(this.selectedCategory);
}
}
