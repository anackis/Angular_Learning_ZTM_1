import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  // title = 'angular-2';
  name = 'Luis'
  imgURL = "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg"


  getName() {
    return this.name
  }
  changeImage(e: KeyboardEvent) {
    this.imgURL = (e.target as HTMLInputElement).value
  }

  logImg(event: string) {
    console.log(event)
  }
}
