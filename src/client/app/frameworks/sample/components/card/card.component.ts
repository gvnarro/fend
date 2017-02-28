import { Component } from '@angular/core';
@Component({
    selector: 'card',
    template: `
<div class="card">
  <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style="width:100%">
  <div class="container">
    <h4><b>John Doe</b></h4> 
    <p>Architect & Engineer</p> 
  </div>
</div>
  `,

    styles: [`
.card {    
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 10%
    padding: 10px;
    margin: 10px;
    display: inline-block;
}

.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
    padding: 2px 16px;
}
  `],
})
//Carousel Component itself
export class CardComponent {

}