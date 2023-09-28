import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit{
  left: boolean = false;

  constructor(){}


  ngOnInit(): void {
  }

}
