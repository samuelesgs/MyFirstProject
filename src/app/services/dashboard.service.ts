import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})

export class DashboardService {

  constructor(private crudService: CrudService) { }

    getList() {
      const complementURL = "videos";
      return new Promise((resolve, reject) => {
        this.crudService.sendGetRequest(complementURL).subscribe({
          next: (response: any) => {
            console.log("la respuesta: ", response);
            resolve(response);
          },
          error: (error: any) => {
            reject(error);
          }
        })
      })
    }

    deleteVideo( id:string ) {
      const complementURL = "videos/" + id;
      return new Promise((resolve, reject) => {
        this.crudService.sendDeleteRequest(complementURL).subscribe({
          next: (response: any) => {
            console.log("El video se borro correctamente");
            resolve(response);
          },
          error: (error: any) => {
            reject(error);
          }
        })
      })
    }

    createVideo( params:FormData){
      const complementURL = "videos";
      return new Promise((resolve, reject) => {
        this.crudService.sendPostRequest(complementURL, params).subscribe({
          next: (response: any) => {
            console.log("El video se borro correctamente");
            resolve(response);
          },
          error: (error: any) => {
            reject(error);
          }
        })
      })
    }




}

export interface ParamCreateVideo{
  name:string;
  url:string;
  fk_user:string;


}
