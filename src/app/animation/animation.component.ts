import { Component, OnInit } from '@angular/core';
import { Animations } from './animation';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
  animations: [Animations.lightTrigger, 
    Animations.height,
    Animations.bgTrigger,
   Animations.flyTrigger]
})
export class AnimationComponent implements OnInit {
  showDiv:boolean=true;
  toggleDiv(){
    this.showDiv=(this.showDiv)?false:true;
  }
  roomState:string="off";
  toggleLights(){
    this.roomState=(this.roomState=="off")?'on':'off';
  }

  heightState:string="fullHeight";

  toggleHeight(){
    this.heightState=(this.heightState=="fullHeight")?'noHeight':'fullHeight';
  }

  roomState1:string="bg1";
  toggleBg(){
    this.roomState1=(this.roomState1=="bg1")?'bg2':'bg1';
  }


  constructor() { }

  ngOnInit(): void {
  }

}
