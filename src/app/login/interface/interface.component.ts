import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit {
  user:User = new User();
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLoggedIn(){
    console.log(this.user)
    this.router.navigate(['dashboard'])
  }
}
