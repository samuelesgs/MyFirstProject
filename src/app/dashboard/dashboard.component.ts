import { Component } from '@angular/core';
import { DashboardService, ListVideosResponse } from '../services/dashboard.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { MiFirstDialogComponent } from '../dialogs/mi-first-dialog/mi-first-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  public listVideos: ListVideosResponse[] = [];

  public videos: any = [];

  constructor(
    private dashboardService: DashboardService,
    private sanitizer: DomSanitizer,
    private dialog: MatDialog) { }


  ngOnInit(): void {
    this.getList();
  }

  public getList() {

    this.dashboardService.getList().then((response: any) => {
      console.log("La respuesta obtenida es: " + response)
      this.listVideos = this.dashboardService.listVideos;
      this.loadVideos();
      console.log("La lista de videos es: ", this.listVideos);

    }, (error: any) => {
      console.log("Error en la petición get: ", error);
    });
  }

  loadVideos() {
    for (const row of this.listVideos) {
      console.log("http://localhost:3000/" + row.url);
    }
    ///file-1749058924280-56030156.mp4
    this.videos = this.listVideos.map(video => ({
      id: video.id_video,
      safeUrl: this.sanitizer.bypassSecurityTrustResourceUrl(
        `http://localhost:3000/videos/${video.url.replace("uploads/videos/", "")}`
      )
    }));

  }

  getVideo(id: number) {
    return this.videos.find((row: any) => row.id == id);
  }

  public deleteVideo(idDelete: string) {
    this.dashboardService.deleteVideo(idDelete).then((response: any) => {
      console.log("La respuesta obtenida es: " + response)
    }, (error: any) => {
      console.log("Error en la petición get: ", error);
    });
  }

  openDialog(item :  ListVideosResponse) {
    const dialogRef = this.dialog.open(MiFirstDialogComponent, {
      width: '150',
      data : item
    });

    dialogRef.afterClosed().subscribe(resultado => {
      console.log("El resultado cliqueado fue : ",resultado);
      if (resultado === 'confirmado') {
        console.log('El botón fue cliqueado');
        // Aquí puedes hacer cualquier acción
      }
    });
  }
}
