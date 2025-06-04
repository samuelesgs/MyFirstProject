import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ParamRegisterUser } from '../../services/users.service';

@Component({
  selector: 'app-headers-dashboard',
  templateUrl: './headers-dashboard.component.html',
  styleUrl: './headers-dashboard.component.scss'
})
export class HeadersDashboardComponent {
  @Input() name! : string;
  @Output() outputClickName = new EventEmitter<string>();

  public localStorage = localStorage;
  constructor(
      private router: Router) { }


  public sendCrear() {
  console.log('Navegando a /create-video');
  this.router.navigate(['/create-video']);
  }

  public cerrarSesion(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }


  public clickName(name : string) {
    this.outputClickName.emit(name);
  }
}
