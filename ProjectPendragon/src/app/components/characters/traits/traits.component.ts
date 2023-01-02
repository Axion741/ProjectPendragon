import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Traits } from 'src/app/models/character/traits';

@Component({
  selector: 'traits',
  templateUrl: './traits.component.html',
  styleUrls: ['./traits.component.css']
})
export class TraitsComponent implements OnInit {
  @Input() traits: Traits = new Traits();
  @Output() traitsChange: EventEmitter<Traits> = new EventEmitter<Traits>();

  constructor() { }

  ngOnInit(): void {
  }

  emitTraitsChange(): void {
    this.traitsChange.emit(this.traits);
  }

}
