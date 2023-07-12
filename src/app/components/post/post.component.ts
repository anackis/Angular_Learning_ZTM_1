import { Component, Input, EventEmitter, Output, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() postImg = ''
  // @Input('img') postImg = ''

  @Output() imgSelected = new EventEmitter<string>()

  // Most Used !!!
  constructor() {  //  Executing first. But will not show this.postImg because from beginign its '' and after we chnage it. 
    console.log("constructor() called", this.postImg)
  }

  // Most Used !!!
  ngOnInit() {    // Run after constructor and show this.postImg.
    console.log("ngonInit() called", this.postImg)
  }

  // Most Used !!!
  ngOnChanges() {   // Executing when changes happens
    console.log("ngOnChnages() called")
  }

  ngDoCheck() {   // Rare to use. Mostly needed for errors finding.
    console.log("ngDoCheck() called")
  }

  
  ngAfterContentInit() {
    console.log("ngAfterContentInit() called")
  }
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked() called")
  }


  ngAfterViewInit(): void {
    console.log("ngAfterViewInit() called")
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked() called")
  }

  // Most Used !!!
  ngOnDestroy(): void {
    console.log("ngOnDestroy() called")
  }

}

