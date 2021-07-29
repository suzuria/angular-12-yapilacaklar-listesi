import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { keyframes } from '@angular/animations';
import { JsonPipe } from '@angular/common';
//import { stringify } from 'querystring';
//import { Event } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  wait = [
    'Uyan',
    'İşe git',
  ];

  todo = [
    'Uyan',
    'İşe git',
    'Markete uğra',
    'Köpeği gezdir',
  ];

  done = [
    'Uyuyakal',
    'Kediyle kavga et',
    'Yeşili Koru',
    'Çöpü çıkra',
    'Be good'
  ];

  // data = {
  //   wait : [
  //   'Uyan',
  //   'İşe git',
  //   ],
  //   todo : [
  //   'Uyan',
  //   'İşe git',
  //   'Markete uğra',
  //   'Köpeği gezdir',
  //   ],
  //   done : [
  //   'Uyuyakal',
  //   'Kediyle kavga et',
  //   'Yeşili Koru',
  //   'Çöpü çıkra',
  //   'Be good']
  // }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
        // Object.keys(this.data).forEach( (key) => {
        //   localStorage.setItem('key', JSON.stringify(this.data[key]));
        // }); 
        
        
        
        Object.keys(this.wait).forEach((key) =>{
        localStorage.setItem('wait', JSON.stringify(this.wait));
        }); 
        Object.keys(this.todo).forEach((key) =>{
          localStorage.setItem('todo', JSON.stringify(this.todo));
        }); 
        Object.keys(this.done).forEach((key) =>{
        localStorage.setItem('done', JSON.stringify(this.done));
        }); 
    }
  }

  
  talepEkle(talepEkle : any){
    //console.log("home.comp talep ekleme çalışıyor",talepEkle.value,"yazıldı")
    this.wait.push(talepEkle.value);
    talepEkle.value = '';
    localStorage.setItem('wait', JSON.stringify(this.wait));
  }

  setItems(){
    Object.keys(this.wait).forEach((key) =>{
      if (!localStorage.getItem('wait')) {
            localStorage.setItem('wait', JSON.stringify(this.wait));
          } else {
            this.wait = JSON.parse(localStorage.getItem('wait') || '{}')
          }
      }); 
      Object.keys(this.todo).forEach((key) =>{
        if (!localStorage.getItem('todo')) {
              localStorage.setItem('todo', JSON.stringify(this.todo));
            } else {
              this.todo = JSON.parse(localStorage.getItem('todo') || '{}')
            }
        }); 
        Object.keys(this.done).forEach((key) =>{
          if (!localStorage.getItem('done')) {
                localStorage.setItem('done', JSON.stringify(this.done));
              } else {
                this.done = JSON.parse(localStorage.getItem('done') || '{}')
              }
          }); 











    //çalışan console log
    //   Object.keys(localStorage).forEach(function(key){
    //     console.log(localStorage.getItem(key));
    // }); 

        //console.log(key);
        //çalışan kod
      //   if (!localStorage.getItem('wait')) {
      //     localStorage.setItem('wait', JSON.stringify(this.wait));
      //   } else {
      //     this.wait = JSON.parse(localStorage.getItem('wait') || '{}')
      //   }

      //   if (!localStorage.getItem('todo')) {
      //     localStorage.setItem('todo', JSON.stringify(this.todo))
      //   } else {
      //     this.todo = JSON.parse(localStorage.getItem('todo') || '{}')
      //   }
        
      //   if (!localStorage.getItem('done')) {
      //     localStorage.setItem('done', JSON.stringify(this.done))
      //   } else {
      //     this.done = JSON.parse(localStorage.getItem('done') || '{}')
      //   }
      // };


          // Object.keys(this.data).forEach( (key) => {
    //     if (!localStorage.getItem(key)) {
    //       localStorage.setItem('key', JSON.stringify(this.data[ key]));
    //     } else {
    //       this.data[key] = JSON.parse(localStorage.getItem(key) || '{}');
    //     }
    //   });
  

  }

  constructor() { }

  ngOnInit(): void {
    this.setItems();
  }

}
