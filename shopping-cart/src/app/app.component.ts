import { Component } from '@angular/core';

interface Item {
  name: string;
  price: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  availableItems: Item[] = [
    { name: 'Apple', price: 2 },
    { name: 'Banana', price: 1 },
    { name: 'Orange', price: 3 },
    { name: 'Mango', price: 5 },
  ];

  cart: Item[] = [];

  addToCart(item: Item) {
    this.cart.push(item);
  }

  removeFromCart(index: number) {
    this.cart.splice(index, 1);
  }

  getTotal(): number {
    return this.cart.reduce((total, item) => total + item.price, 0);
  }
}
