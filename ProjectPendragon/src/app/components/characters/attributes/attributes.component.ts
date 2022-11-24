import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Attributes } from 'src/app/models/character/attributes';

@Component({
  selector: 'attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.css']
})
export class AttributesComponent implements OnInit {

  @Input() attributes: Attributes = new Attributes();
  @Output() attributesChange: EventEmitter<Attributes> = new EventEmitter<Attributes>();

  constructor() { }

  ngOnInit(): void {
  }

  emitAttributeChange(): void {
    this.attributesChange.emit(this.attributes);
  }

  calculateHp(): string {
    return (this.attributes.siz + this.attributes.con).toString();
  }

  calculateDam(): string {
    return Math.round((this.attributes.str + this.attributes.siz)/6).toString() + "d6";
  }

  calculateMov(): string {
    return Math.round((this.attributes.dex + this.attributes.str)/10).toString();
  }

  calculateUncon(): string {
    return Math.round(parseInt(this.calculateHp())/4).toString();
  }

  calculateHeal(): string {
    return Math.round((this.attributes.str + this.attributes.con)/10).toString();
  }

  
}
