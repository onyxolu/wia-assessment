import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrowback',
  templateUrl: './arrowback.component.html',
  styleUrls: ['./arrowback.component.scss']
})
export class ArrowbackComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  goBack() {
    this.location.back()
  }

}
