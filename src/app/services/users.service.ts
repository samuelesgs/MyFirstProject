import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private crudService: CrudService) { }

  registerUser(params: ParamRegisterUser) {
    const complementURL = "users";
    return new Promise((resolve, reject) => {
      this.crudService.sendPostRequest(complementURL, params).subscribe({
        next: (response: RegisterUserResponse) => {
          resolve(response.email);
        },
        error: (error: any) => {
          reject(error);
        }
      })
    })
  }

  loginUser(params: ParamLoginUser): Promise<RegisterUserResponse> {
    const complementURL = "users/login";
    return new Promise((resolve, reject) => {
      this.crudService.sendPostRequest(complementURL, params).subscribe({
        next: (response: RegisterUserResponse) => {
          if (response?.name) {

            console.log("El ingreso fue exitoso! usuario: " + response.name)
            resolve(response);

          } else {
            reject("No se obtuvieron datos.")
          }
        },
        error: (error: any) => {
          reject(error);
        }
      })
    })
  }
}

export interface ParamRegisterUser {
  name: string;
  email: string;
  password: string;
}

export interface RegisterUserResponse {
  email: string;
  name: string;
  password: string;
  server_date: string;
  id: number;
}

export interface ParamLoginUser {
  email: string;
  password: string;
}
