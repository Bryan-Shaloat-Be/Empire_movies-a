import { AnimateTimings } from '@angular/animations';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FiltersService {
  private categorySubject = new BehaviorSubject<string | null>(null);
  callcategory = this.categorySubject.asObservable();

  setCategory(category: string) {
    this.categorySubject.next(category);
  }
}
