import { Component, OnInit, Input } from '@angular/core';
import { Frame } from '../frame';
import { FramesService } from '../frames.service';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss']
})
export class FrameComponent implements OnInit {

  @Input() isStarted:boolean;

  constructor(private frameService: FramesService) { }

  f = 0;
  frames: Frame[];

  ngOnInit() {
    this.getFrames();
  }

  if (isStarted) {
    console.log('started!');
    this.start();
  }

  getFrames() {
    var temp = this.frameService.getFrames();
    var rtn = [];
    for (let i = 0; i < temp.length; i++){
      if (temp[i].exercise == this.body_code){
        rtn.push(temp[i]);
      }
    }
    this.frames = rtn;
    console.log(this.frames);
  }

  speed:number = 1;
  body_code:number = 1;

  th = this;
  paused:boolean = true;

  start(this) {
    if (this.f >= this.frames.length - 1) {
      this.f = 0;
    }
    this.paused = false;
    this.cycle();
  }

  cycle() {
    var th = this;
    if (th.paused) {
      th.f--;
      return;
    }

    if (th.f >= th.frames.length - 1) {
      return;
    }

    setTimeout(function() {
      th.f++;
      console.log(th.f);
      th.cycle();
    }, 1000 / th.speed);
  }

  pause() {
    console.log('paused');
    this.paused = true;
  }

}
