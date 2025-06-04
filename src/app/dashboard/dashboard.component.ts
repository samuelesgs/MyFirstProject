import { Component } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.getList();
  }

  public getList() {

    this.dashboardService.getList().then((response: any) => {
      console.log("La respuesta obtenida es: " + response)
    }, (error: any) => {
      console.log("Error en la petición get: ", error);
    });


  }

  public deleteVideo( idDelete:string) {
    this.dashboardService.deleteVideo(idDelete).then((response: any) => {
      console.log("La respuesta obtenida es: " + response)
    }, (error: any) => {
      console.log("Error en la petición get: ", error);
    });
  }

}
