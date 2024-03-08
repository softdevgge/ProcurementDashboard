import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.css']
})
export class MiniCardComponent {

  @Input() icon: string='';
  @Input() title: string='';
  @Input() value: number=0;
  @Input() color: string='';
  @Input() isIncrease: boolean=false;
  @Input() isCurrency: boolean=false;
  @Input() duration: string='';
  @Input() percentValue: number=0;

  constructor() { }

}