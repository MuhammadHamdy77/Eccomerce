import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent {
  @Input() totalItems!:number;
  @Input() itemsPerPage!:number;
  @Output() PageEmitter: EventEmitter<any> = new EventEmitter();
  
  constructor(){
  }

  GoToPage(page:any) {
    this.PageEmitter.emit(page.page);
  }
}
