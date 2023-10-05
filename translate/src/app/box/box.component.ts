import { Component, OnInit, ViewChild } from '@angular/core';
import { TransalteService } from '../services/transalte.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit{

  @ViewChild('f') fform!: NgForm;
  @ViewChild('s') sform!: NgForm;

  left: boolean = false;

  first:string = '';
  second:string = 'Transalte';

  constructor(private svc:TransalteService){}

  ngOnInit(): void {
    this.translate()
  }

  translate(){
    this.svc.translate(this.first).subscribe(
      (data) => {
        console.log(data)
        this.second = Object.values(data)[0].translations[0].translatedText
      },
      (err) => {
        console.log(err)
      }
  )}
}
