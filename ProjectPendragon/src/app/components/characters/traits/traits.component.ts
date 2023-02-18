import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Traits } from 'src/app/models/character/traits';
import { TraitsService } from 'src/app/services/traits.service';

@Component({
  selector: 'traits',
  templateUrl: './traits.component.html',
  styleUrls: ['./traits.component.css']
})
export class TraitsComponent implements OnInit {
  @Input() traits: Traits = new Traits();
  @Input() readonly: boolean = false;
  @Output() traitsChange: EventEmitter<Traits> = new EventEmitter<Traits>();

  constructor(public _traitsService: TraitsService) { }

  ngOnInit(): void {
  }

  emitTraitsChange(): void {
    this.traitsChange.emit(this.traits);
  }

}
