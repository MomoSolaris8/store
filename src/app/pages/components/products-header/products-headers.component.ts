import { Component, OnInit ,Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-products-header',
  templateUrl: './products-headers.component.html'
})
export class ProductsHeaderComponent implements OnInit {

  @Output() columnsCountChange= new EventEmitter<number>();
  sort= 'desc';
  itemShowCount = 12;

  constructor() { }

  ngOnInit() {
  }

  onSortUpdated(newSort: string) :void{
    this.sort = newSort;
  }

  onItemsUpdated(count: number):void{
    this.itemShowCount = count;
  }


  onColumnsUpdated(colsNum: number):void{
    this.columnsCountChange.emit(colsNum);
  }
}
