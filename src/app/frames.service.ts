import { Injectable } from '@angular/core';
import { Frame } from './frame';
import { FRAMES } from './group-frames';

@Injectable({
  providedIn: 'root'
})
export class FramesService {

  constructor() { }
  getFrames(): Frame[] {
    return FRAMES;
  }
}
