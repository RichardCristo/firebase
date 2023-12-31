import { Component } from '@angular/core'; 
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  formReg: FormGroup;
  
  constructor(
    private userService: UsersService,
    private router: Router
  ){
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {

  }

  onSubmit(){
    this.userService.register(this.formReg.value)
      .then(response => {
        console.log(response);
        this.router.navigate(['/login']);
      })
      .catch(error => console.log(error));
  }
}
