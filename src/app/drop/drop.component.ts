import { Component, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-drop',
  templateUrl: './drop.component.html',
  styleUrls: ['./drop.component.css']
})
export class DropComponent{
  isHidden : boolean = true;
  isHidden2 : boolean = true;
  @ViewChild('phone')phone : ElementRef | any;
  @ViewChild('email')email : ElementRef | any; 

  dropdown(eve:any){
    if(this.phone.nativeElement.value === eve.target.value){
      this.isHidden = false;
      this.isHidden2 = true;
    }else if(this.email.nativeElement.value === eve.target.value){
      this.isHidden2 = false;
      this.isHidden = true;
    }
  } 
}
