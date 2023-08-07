import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor(
    private userService : UsersService,
    private router: Router  
  ) {}

  ngOnInit(): void {}

  onClick() {
    this.userService.logout()
    .then(()=> {
      this.router.navigate(['/register'])
    })
    .catch(error => console.log(error));
  }
}
