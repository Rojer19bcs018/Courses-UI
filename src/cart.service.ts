import { course } from './course/course.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: course[] = [];
/* . . . */

  addToCart(Course: course) {
    this.items.push(Course);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
/* . . . */
}


