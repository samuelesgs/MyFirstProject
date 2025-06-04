import { Component } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-create-video',
  templateUrl: './create-video.component.html',
  styleUrl: './create-video.component.scss'
})
export class CreateVideoComponent {
  selectedFile?:File;
  name:string = "";

  constructor(private dashboardService: DashboardService) { }

  public sendCreateVideo( ) {
    const formData = new FormData();
    formData.append('file', this.selectedFile!);
    formData.append('name', this.name);
    formData.append('fk_user', localStorage.getItem('id')!);
    formData.append('url', this.selectedFile!.name)
    this.dashboardService.createVideo(formData).then((response: any) => {
      console.log("La respuesta obtenida es: " + response)
    }, (error: any) => {
      console.log("Error en la petición get: ", error);
    });
  }
}
