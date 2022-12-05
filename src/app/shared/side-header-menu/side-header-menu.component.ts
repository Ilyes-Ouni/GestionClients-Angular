import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'side-header-menu',
  templateUrl: './side-header-menu.component.html',
  styleUrls: ['./side-header-menu.component.css']
})
export class SideHeaderMenuComponent implements OnInit {
  username:string= 'Ilyes El Ouni'
  tunisiaPath:string = 'https://img.freepik.com/premium-vector/tunisia-flag-design-waving-tunisian-flag-made-satin-silk-fabric-vector-illustration_191567-346.jpg?w=2000';
  constructor() { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.clear()
  }
}
