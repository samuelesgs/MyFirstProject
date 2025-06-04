
import { Router } from '@angular/router';
import { ParamLoginUser, ParamRegisterUser, RegisterUserResponse, UsersService } from './../services/users.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  public email: string = "";
  public password: string = "";

  constructor(private usersService: UsersService, private router: Router) { }

  public sendRequestLogin() {

    const params: ParamLoginUser = {
      email: this.email,
      password: this.password
    }
    console.log(" Email: " + this.email, " Password: " + this.password)

    this.usersService.loginUser(params).then((response: RegisterUserResponse) => {

      localStorage.setItem('email', response.email);
      localStorage.setItem('name', response.name);
      localStorage.setItem('id', response.id + '');

      this.router.navigate(['/dashboard']);

    }, (error: any) => {
      console.log("Error en la petición: ", error);
    });


  }


}
