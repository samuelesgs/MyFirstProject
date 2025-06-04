import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})

export class DashboardService {

  public listVideos:ListVideosResponse[] = [];

  constructor(private crudService: CrudService ) { }

    getList() {
      const complementURL = "videos";
      return new Promise((resolve, reject) => {
        this.crudService.sendGetRequest(complementURL).subscribe({
          next: (response: ListVideosResponse[]) => {
            console.log("la respuesta: ", response);
            this.listVideos = response;
            resolve(response);
          },
          error: (error: any) => {
            reject(error);
          }
        })
      })
    }

    deleteVideo( id:number ) {
      const complementURL = "videos/" + id;
      return new Promise((resolve, reject) => {
        this.crudService.sendDeleteRequest(complementURL).subscribe({
          next: (response: any) => {
            console.log("El video se borro correctamente");
            this.listVideos = this.listVideos.filter(row => row.id_video != id.toString())
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
            resolve(response);
          },
          error: (error: any) => {
            reject(error);
          }
        })
      })
    }




}

export interface ListVideosResponse {
    id_video:    string;
    name:        string;
    url:         string;
    fk_user:     number;
    views:       number;
    server_date: Date;
}
