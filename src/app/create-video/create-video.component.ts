import { Component } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-video',
  templateUrl: './create-video.component.html',
  styleUrl: './create-video.component.scss'
})
export class CreateVideoComponent {
  selectedFile?:File;
  name:string = "";

  constructor(private dashboardService: DashboardService,  private router: Router) { }

  public sendCreateVideo( ) {
    const formData = new FormData();
    formData.append('file', this.selectedFile!);
    formData.append('name', this.name);
    formData.append('fk_user', localStorage.getItem('id')!);
    formData.append('url', this.selectedFile!.name)
    formData.append('views', "0");
    this.dashboardService.createVideo(formData).then((response: any) => {
      console.log("La respuesta obtenida es: ", response)
      this.router.navigate(['/dashboard']);
    }, (error: any) => {
      console.log("Error en la petición get: ", error);
    });
  }

onFileSelected(event: Event): void {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length > 0) {
    this.selectedFile = input.files[0];
  }
}

}
