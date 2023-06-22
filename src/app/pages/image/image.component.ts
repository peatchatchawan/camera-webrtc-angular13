import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  @Input() data?: any;
  @Input() rotateImage?: any;
  stateCaptures: boolean = false;
  stateRotateImage: boolean = false;
  constructor(
    private modalController: ModalController,
  ) { }

  ngOnInit() {
    console.log('this.data:', this.data);
    console.log('this.rotateImage:', this.rotateImage);
    if (this.data.length > 0) {
      this.stateCaptures = true;
      console.log(this.stateCaptures);
    }
    if (this.rotateImage) {
      this.stateRotateImage = true;
      console.log(this.stateRotateImage);
    }
  }

  async onDismiss() {
    this.modalController.dismiss();
  }
}

