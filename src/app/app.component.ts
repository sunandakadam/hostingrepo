import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  topics=['Angular','React','Vue'];
  
  ngOnInit(): void {
   
  }
  onSubmit(form1){
    console.log('username',form1.controls['uname'].value);
  }
}
