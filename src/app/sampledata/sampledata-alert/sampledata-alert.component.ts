import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-sampledata-alert',
  templateUrl: './sampledata-alert.component.html',
  styleUrls: ['./sampledata-alert.component.scss'],
})
export class SampleDataAlertComponent implements OnInit {
  confirmDialog = false;
  message = '';
  title = '';
  cancelButton = 'Cancel';
  acceptButton = 'Delete';
  cancelButtonColor = '';
  constructor(
    public dialogRef: MatDialogRef<SampleDataAlertComponent>,
    @Inject(MAT_DIALOG_DATA) private dialogData: any,
  ) {}

  ngOnInit(): void {
    if (this.dialogData) {
      this.confirmDialog = this.dialogData.confirmDialog;
      this.message = this.dialogData.message;
      this.title = this.dialogData.title;
      this.cancelButton = this.dialogData.cancelButton;
      if (this.confirmDialog) {
        this.acceptButton = this.dialogData.acceptButton;
        this.cancelButtonColor = '';
      } else {
        this.cancelButtonColor = 'accent';
      }
    }
  }
}
