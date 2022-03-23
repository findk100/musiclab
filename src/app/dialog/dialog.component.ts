import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog'


import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  songForm !: FormGroup;

  constructor(private formBuilder: FormBuilder, private api: ApiService, private dialogRef: MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    this.songForm = this.formBuilder.group({
      Album: ['', Validators.required],
      Song1: ['', Validators.required],
      Song2: ['', Validators.required],
      Song3: ['', Validators.required],
      Lyricist1: ['', Validators.required],
      Lyricist2: ['', Validators.required],
      Lyricist3: ['', Validators.required],
      Composer1: ['', Validators.required],
      Composer2: ['', Validators.required],
      Composer3: ['', Validators.required],
      Singer1: ['', Validators.required],
      Singer2: ['', Validators.required],
      Singer3: ['', Validators.required]

    })
  }





  addSongs() {
    console.log(this.songForm.value)
    localStorage.setItem('dataSource', 'keshav');
    localStorage.setItem('name', 'xyz');


  }


}








