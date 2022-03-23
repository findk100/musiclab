import { Component,OnInit,ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog'
import { DialogComponent } from './dialog/dialog.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


import { HttpClient, HttpHeaders } from '@angular/common/http'; 



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
    
  title = 'musiclab';
  
  displayedColumns: string[] = ['Album', 'Song', 'Lyricist', 'Composer', 'Singer'  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog:MatDialog){

  }

  openDialog() {
    this.dialog.open(DialogComponent,{
      
      
    })
  }
  
}



   