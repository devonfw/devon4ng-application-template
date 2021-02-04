import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-sampledata-dialog',
  templateUrl: './sampledata-dialog.component.html',
})
export class SampleDataDialogComponent {
  title: string;
  items: any = {
    name: '',
    surname: '',
    age: '',
    email: '',
  };

  constructor(
    private translocoService: TranslocoService,
    public dialogRef: MatDialogRef<SampleDataDialogComponent>,
    @Inject(MAT_DIALOG_DATA) dialogData: any,
  ) {
    if (!dialogData) {
      this.title = this.translocoService.translate(
        'sampledatamanagement.addTitle',
      );
    } else {
      this.title = this.translocoService.translate(
        'sampledatamanagement.editTitle',
      );
      this.items.name = dialogData.name;
      this.items.surname = dialogData.surname;
      this.items.age = dialogData.age;
      this.items.email = dialogData.email;
      this.items.id = dialogData.id;
      this.items.modificationCounter = dialogData.modificationCounter;
    }
  }

  /* getTranslation(text: string): string {
    let value: string;
    this.translocoService.get(text).subscribe((res: any) => {
      value = res;
    });
    return value;
  } */
}
