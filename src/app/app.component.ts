import { Component, ViewChild } from '@angular/core';
import { FrameComponent } from './frame/frame.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  isStarted:boolean = false;
  title = 'neurobic';
  changeBg() {
    document.body.style.backgroundImage = "url(/assets/img/backgrounds/bg_" + randomInteger(1, 6) + ".jpg"; + ')';
  }
  @ViewChild(FrameComponent)
  public fr: FrameComponent;

  mus_on = false;
  started = false;
  timer;
  audio = new Audio();
  start() {
    if (this.started) {
      this.started = false;
      this.fr.pause();
      if (this.mus_on){
        this.audio.pause();
        this.audio.currentTime = 0.0;
        this.mus_on = false;
      }
     document.querySelector(".button_start").innerHTML = '<i class="fa fa-lg p-2 fa-play"></i>';
      this.fr.pause();
    }
    else {
      this.started = true;
      this.fr.paused = false;
     document.querySelector(".button_start").innerHTML = '<i class="fa fa-lg p-2 fa-stop"></i>';
      this.fr.start();
      var th = this;
        this.timer = setTimeout(function () {
          document.querySelector(".button_start").innerHTML = '<i class="fa fa-lg p-2 fa-play"></i>';
          th.started = false;
          th.fr.pause();
        }, (this.fr.frames.length - this.fr.f) * 1000 / this.fr.speed);

      switch (this.fr.speed) {
        case 1:
          this.audio.src = '/static/this.audio/media1.mp3'; // Указываем путь к звуку "клика"
          break;
        case 2:
          this.audio.src = '/static/this.audio/media2.mp3'; // Указываем путь к звуку "клика"
          break;
        case 3:
          this.audio.src = '/static/this.audio/media3.mp3'; // Указываем путь к звуку "клика"
          break;
        case 4:
          this.audio.src = '/static/this.audio/media4.mp3'; // Указываем путь к звуку "клика"
          break;
        case 5:
          this.audio.src = '/static/this.audio/media5.mp3'; // Указываем путь к звуку "клика"
          break;
        case 6:
          this.audio.src = '/static/this.audio/media6.mp3'; // Указываем путь к звуку "клика"
          break;
          
        this.audio.autoplay = true;
        this.mus_on = true;
      }
    }
  }

  ngOnInit() {
    this.changeBg()
  }

  skorost_plus() {
    if (this.fr.speed < 6) {
        this.fr.speed++;
        console.log(this.fr.speed)
        document.querySelector('.skorost_tablo').innerHTML = this.fr.speed.toString();
    }
  }

  skorost_minus() {
    if (this.fr.speed > 1) {
        this.fr.speed--;
        document.querySelector('.skorost_tablo').innerHTML = this.fr.speed.toString();
    }
  }

  body_code_plus() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    document.querySelector(".button_start").innerHTML = '<i class="fa fa-lg p-2 fa-play"></i>';
    this.started = false;
    this.fr.pause();
    if (this.fr.body_code < 6) {
        this.fr.body_code++;
        
        document.querySelector(".body_code_tablo").innerHTML = this.fr.body_code.toString();
        this.fr.getFrames();
        this.fr.pause();
        this.fr.f = 0;
    }
  }

  body_code_minus() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    document.querySelector(".button_start").innerHTML = '<i class="fa fa-lg p-2 fa-play"></i>';
    this.started = false;
    this.fr.pause();
    if (this.fr.body_code > 1) {
        this.fr.body_code--;
        
        document.querySelector(".body_code_tablo").innerHTML = this.fr.body_code.toString();
        this.fr.getFrames();
        this.fr.pause();
        this.fr.f = 0;
    }
  }
}

function randomInteger(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}

var $ = document.querySelectorAll;