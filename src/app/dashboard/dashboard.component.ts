import { Component } from '@angular/core';
import { DashboardService, ListVideosResponse } from '../services/dashboard.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { MiFirstDialogComponent } from '../dialogs/mi-first-dialog/mi-first-dialog.component';
import { DeleteDialogComponent } from '../dialogs/delete-dialog/delete-dialog.component';
import { Dialog } from '@angular/cdk/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {


  public listVideos: ListVideosResponse[] = [];

  public videos: any = [];

  localstorage = localStorage;

  constructor(
    private dashboardService: DashboardService,
    private sanitizer: DomSanitizer,
    private dialog: MatDialog,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.getList();
  }

  public getList() {

    this.dashboardService.getList().then((response: any) => {
      console.log("La respuesta obtenida es: ", response)
      this.listVideos = this.dashboardService.listVideos;
      this.loadVideos();
      console.log("La lista de videos es: ", this.listVideos);

    }, (error: any) => {
      console.log("Error en la petición get: ", error);
    });
  }

  loadVideos() {
    for (const row of this.listVideos) {

      console.log("http://localhost:3000/videos/" + row.url.replace("uploads\\videos\\", ""));
    }
    ///file-1749058924280-56030156.mp4
    this.videos = this.listVideos.map(video => ({
      id: video.id_video,
      safeUrl: this.sanitizer.bypassSecurityTrustResourceUrl(
        `http://localhost:3000/videos/${video.url.replace("uploads/videos/", "").replace("uploads\\videos\\", "")}`
      )
    }));

  }

  getVideo(id: string) {
    return this.videos.find((row: any) => row.id == id);
  }

  openDialog(item: ListVideosResponse) {
    const dialogRef = this.dialog.open(MiFirstDialogComponent, {
      width: '150',
      data: item
    });

    dialogRef.afterClosed().subscribe(resultado => {
      console.log("El resultado cliqueado fue : ", resultado);
      if (resultado === 'confirmado') {
        console.log('El botón fue cliqueado');
        // Aquí puedes hacer cualquier acción
      }
    });
  }

  openDialogDelete(item: ListVideosResponse) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '150',
      data: item
    });

    dialogRef.afterClosed().subscribe(resultado => {
      if (resultado) this.sendDeleteVideo(item)
    });
  }

  sendDeleteVideo(item: ListVideosResponse) {
    this.dashboardService.deleteVideo(+item.id_video).then((response: any) => {
      this.listVideos = this.dashboardService.listVideos;
      console.log("La respuesta obtenida es: " + response)
    }, (error: any) => {
      console.log("Error en la petición get: ", error);
    });
  }

  clickName(name : any) {
    console.log("Fue clieado el nombre : ", name);
  }
}
