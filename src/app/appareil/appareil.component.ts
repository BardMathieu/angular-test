import { Component, OnInit, Input } from '@angular/core';
import {AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() index: number;
  @Input() id: number;
  constructor(private appareilServices: AppareilService) { }

  ngOnInit() {
  }
  getStatus(){
    return this.appareilStatus;
  }
  onSwitch() {
    if(this.appareilStatus === 'allumé') {
      this.appareilServices.switchOffOne(this.index);
    } else if(this.appareilStatus === 'éteint') {
      this.appareilServices.switchOnOne(this.index);
    }
  }
}
