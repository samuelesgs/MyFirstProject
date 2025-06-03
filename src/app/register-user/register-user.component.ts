import { Component } from '@angular/core';
import { ParamRegisterUser, UsersService } from '../services/users.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.scss'
})
export class RegisterUserComponent {
  public name:string = "";
  public email:string = "";
  public password:string = "";

  constructor(private usersService:UsersService){}

  public sendRequestRegister(){

    const params:ParamRegisterUser = {
      name: this.name,
      email:this.email,
      password:this.password
    }
    console.log("Nombre: " + this.name, " Email: " +  this.email, " Password: " + this.password)
    this.usersService.registerUser(params).then((response:any) => {
      console.log("El registro fue exitoso! Tu correo es: " + response)
    }, (error:any) => {
      console.log(error);
    });


  }

}
