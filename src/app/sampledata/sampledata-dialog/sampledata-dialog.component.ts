import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sampledata-dialog',
  templateUrl: './sampledata-dialog.component.html'
})
export class SampleDataDialogComponent implements OnInit {

  title: string;
  items = {
    name: '',
    surname: '',
    age: '',
    mail: ''
  };

  ngOnInit() {
  }

  constructor(public dialogRef: MatDialogRef<SampleDataDialogComponent >,
              private translate: TranslateService,
              @Inject(MAT_DIALOG_DATA) dialogData: any) {
    if (!dialogData) {
      this.title = this.getTranslation('sampledatamanagement.addTitle');
    } else {
      this.title = this.getTranslation('sampledatamanagement.editTitle');
      this.items = dialogData;
    }
  }

  getTranslation(text: string): string {
    let value: string;
    this.translate.get(text).subscribe((res) => {
      value = res;
    });
    return value;
  }

}
