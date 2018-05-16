import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'public-sampledata-dialog',
  templateUrl: './sampledata-dialog.component.html',
})
export class SampleDataDialogComponent {
  title: string;
  items: any = {
    name: '',
    surname: '',
    age: '',
    mail: '',
  };

  constructor(
    private translate: TranslateService,
    public dialogRef: MatDialogRef<SampleDataDialogComponent>,
    @Inject(MAT_DIALOG_DATA) dialogData: any,
  ) {
    if (!dialogData) {
      this.title = this.getTranslation('sampledatamanagement.addTitle');
    } else {
      this.title = this.getTranslation('sampledatamanagement.editTitle');
      this.items = dialogData;
    }
  }

  getTranslation(text: string): string {
    let value: string;
    this.translate.get(text).subscribe((res: any) => {
      value = res;
    });
    return value;
  }
}
