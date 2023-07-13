import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  // title = 'angular-2';
  name = 'luis test'
  imgURL = "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg"
  imgs = [
    'https://media.istockphoto.com/id/1322123064/photo/portrait-of-an-adorable-white-cat-in-sunglasses-and-an-shirt-lies-on-a-fabric-hammock.jpg?s=612x612&w=0&k=20&c=-G6l2c4jNI0y4cenh-t3qxvIQzVCOqOYZNvrRA7ZU5o=',
    'https://i0.wp.com/katzenworld.co.uk/wp-content/uploads/2019/06/funny-cat.jpeg?fit=1920%2C1920&ssl=1',
    'https://i.pinimg.com/564x/ba/92/7f/ba927ff34cd961ce2c184d47e8ead9f6.jpg',
  ]
  currentDate = new Date()
  cost = 2000
  temperature = 25.3
  pizza = {
    toppings: ['cheese','mushrooms'],
    size: 'medium',
  }
  blueClass = false
  fontSize = 16


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
