import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: any
  @Output() deleteUpdate = new EventEmitter();

  share(link: string) {
    document.location.href = link;
  }

  onNotify(): void {
    alert("notify");
  }

  formatedPrice(price: number): string {
    return price.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')
  }

  handleDelete(): void {
    this.deleteUpdate.emit(this.product.id);
  }
}
