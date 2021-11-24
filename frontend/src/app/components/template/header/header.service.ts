
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderData } from './header-data.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  //https://stackoverflow.com/questions/39494058/behaviorsubject-vs-observable

  private _headerData = new BehaviorSubject<HeaderData>({
    title: 'Início',
    icon: 'home',
    routeUrl: ''
  })

  constructor() { }

  get headerData(): HeaderData {
    return this._headerData.value
  }

  set headerData(headerData :HeaderData) {
    this._headerData.next(headerData)
  }

}
