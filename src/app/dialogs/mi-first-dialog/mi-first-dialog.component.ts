import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mi-first-dialog',
  templateUrl: './mi-first-dialog.component.html',
  styleUrl: './mi-first-dialog.component.scss'
})
export class MiFirstDialogComponent {

  constructor(private dialogRef: MatDialogRef<MiFirstDialogComponent>) {}

  public clicButton(desition : boolean) {
    this.dialogRef.close(desition)
  }
  
}
