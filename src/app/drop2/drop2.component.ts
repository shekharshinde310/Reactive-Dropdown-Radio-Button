import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-drop2',
  templateUrl: './drop2.component.html',
  styleUrls: ['./drop2.component.css']
})
export class Drop2Component {
  isHidden : boolean = true;
  isHidden2 : boolean = true;
  @ViewChild('phone')phone : ElementRef | any;
  @ViewChild('email')email : ElementRef | any; 
  handleRadioClick1(){
    console.log('click event');
    console.log(this.phone.nativeElement.value);
    if(this.phone.nativeElement.value){
      this.isHidden = false;
      this.isHidden2 = true;
      this.phone.checked = true;
      this.email.checked = false;
    }
  }
  handleRadioClick2(){
    console.log('click event2');
    console.log(this.email.nativeElement.value);
    if(this.email.nativeElement.value){
      this.isHidden2 = false;
      this.isHidden = true;
      this.email.checked = true;
      this.phone.checked = false;
    }
  }
}
