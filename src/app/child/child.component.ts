import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Subject} from 'rxjs';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input('parentText') parentTextBoxValue: String;
  @Input() parentClick: Subject<void>;
  @Output('ontextFromChild') passToParent: EventEmitter<String> = new EventEmitter<String>();

  clickCount = 0;
  childTextBoxValue:String;
  constructor() { }

  ngOnInit() {
    this.parentClick.subscribe(() => this.incrementValue());
  }

  incrementValue() {
    this.clickCount = this.clickCount + 1;
  }
  
  passTextValueToParent() {
    this.passToParent.emit(this.childTextBoxValue);
  }
}
