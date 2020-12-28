import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  state: BehaviorSubject <boolean> = new BehaviorSubject<boolean>(false);
  _state = this.state.asObservable();

  constructor() { }

  open(){
    this.state.next(true);
  }

  close(){
    this.state.next(false);
  }
}
