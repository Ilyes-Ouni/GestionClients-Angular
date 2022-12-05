import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit {
  username:string= 'Ilyes El Ouni'

  constructor() { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.clear()
  }
}
