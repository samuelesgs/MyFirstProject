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
}
