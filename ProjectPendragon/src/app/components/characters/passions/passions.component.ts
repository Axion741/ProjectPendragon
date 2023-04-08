import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { Passion } from 'src/app/models/character/passion';

@Component({
  selector: 'passions',
  templateUrl: './passions.component.html',
  styleUrls: ['./passions.component.css'],
  viewProviders: [ {provide: ControlContainer, useExisting: NgForm } ]
})
export class PassionsComponent implements OnInit {
  @Input() passions: Passion[] = [];
  @Input() readonly: boolean = false;
  @Output() passionsChange: EventEmitter<Passion[]> = new EventEmitter<Passion[]>();

  constructor() { }

  ngOnInit(): void {
  }

  emitPassionsChange(): void {
    this.passionsChange.emit(this.passions);
  }

  addPassion() {
    this.passions.push(new Passion());
    this.emitPassionsChange();
  }

  updatePassionDescription(event: Event, id: string) {
    var passion = this.passions.find(f => f.id == id);

    if (passion) {
      passion.description = (event.target as HTMLInputElement).value;
      this.emitPassionsChange();
    }
    else 
      console.log("KB - passion not found!");
  }

  updatePassionValue(event: Event, id: string) {
    var passion = this.passions.find(f => f.id == id);

    if (passion) {
      this.emitPassionsChange();
    }
    else 
      console.log("KB - passion not found!");
  }

  removePassion(id: string) {
    this.passions = this.passions.filter(f => f.id != id);
    this.emitPassionsChange();
  }

  trackByIndex(index: number, passion: Passion): any {
    return index;
  }
}
