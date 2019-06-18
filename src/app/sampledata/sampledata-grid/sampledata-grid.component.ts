import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SampleDataService } from '../services/sampledata.service';
import { AuthService } from '../../core/security/auth.service';
import { SampleDataDialogComponent } from '../sampledata-dialog/sampledata-dialog.component';
import { Pageable } from '../../core/interfaces/pageable';
import { SelectionModel } from '@angular/cdk/collections';
import { SampleDataAlertComponent } from '../sampledata-alert/sampledata-alert.component';

@Component({
  selector: 'public-sampledata-grid',
  templateUrl: './sampledata-grid.component.html',
  styleUrls: ['./sampledata-grid.component.scss'],
})
export class SampleDataGridComponent implements OnInit {
  private pageable: Pageable = {
    pageSize: 8,
    pageNumber: 0,
  };
  private sorting: any[] = [];

  @ViewChild('pagingBar', { static: true })
  pagingBar: MatPaginator;

  data: any = [];
  columns: any[] = [
    {
      name: 'name',
      label: this.getTranslation(
        'sampledatamanagement.SampleData.columns.name',
      ),
    },
    {
      name: 'surname',
      label: this.getTranslation(
        'sampledatamanagement.SampleData.columns.surname',
      ),
    },
    {
      name: 'age',
      label: this.getTranslation('sampledatamanagement.SampleData.columns.age'),
    },
    {
      name: 'mail',
      label: this.getTranslation(
        'sampledatamanagement.SampleData.columns.mail',
      ),
    },
  ];
  displayedColumns: string[] = ['select', 'name', 'surname', 'age', 'mail'];
  pageSize: number = 8;
  pageSizes: number[] = [8, 16, 24];
  selectedRow: any;
  dialogRef: MatDialogRef<SampleDataDialogComponent>;
  totalItems: number;
  searchTerms: any = {
    name: undefined,
    surname: undefined,
    age: undefined,
    mail: undefined,
  };
  selection: SelectionModel<any> = new SelectionModel<any>(false, []);
  constructor(
    private translate: TranslateService,
    public dialog: MatDialog,
    public authService: AuthService,
    public router: Router,
    private dataGridService: SampleDataService,
  ) {}

  ngOnInit(): void {
    this.getSampleData();
  }
  getSampleData(): void {
    this.dataGridService
      .getSampleData(
        this.pageable.pageSize,
        this.pageable.pageNumber,
        this.searchTerms,
        (this.pageable.sort = this.sorting),
      )
      .subscribe(
        (res: any) => {
          this.data = res.content;
          this.totalItems = res.totalElements;
        },
        (error: any) => {
          setTimeout(() => {
            this.dialog.open(SampleDataAlertComponent, {
              width: '400px',
              data: {
                confirmDialog: false,
                message: this.getTranslation(error.message),
                title: this.getTranslation('ERROR'),
                cancelButton: this.getTranslation('CLOSE'),
              },
            });
          });
        },
      );
  }
  getTranslation(text: string): string {
    let value: string;
    this.translate.get(text).subscribe((res: string) => {
      value = res;
    });
    this.translate.onLangChange.subscribe(() => {
      this.columns.forEach((column: any) => {
        if (text.endsWith(column.name)) {
          this.translate
            .get('sampledatamanagement.SampleData.columns.' + column.name)
            .subscribe((res: string) => {
              column.label = res;
            });
        }
      });
    });
    return value;
  }
  page(pagingEvent: PageEvent): void {
    this.pageable = {
      pageSize: pagingEvent.pageSize,
      pageNumber: pagingEvent.pageIndex,
      sort: this.pageable.sort,
    };
    this.getSampleData();
  }
  sort(sortEvent: Sort): void {
    this.sorting = [];
    if (sortEvent.direction) {
      this.sorting.push({
        property: sortEvent.active.split('.').pop(),
        direction: '' + sortEvent.direction,
      });
    }
    this.getSampleData();
  }
  checkboxLabel(row?: any): string {
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
  openDialog(): void {
    this.dialogRef = this.dialog.open(SampleDataDialogComponent);

    this.dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.dataGridService.saveSampleData(result).subscribe(
          () => {
            this.getSampleData();
          },
          (error: any) => {
            this.dialog.open(SampleDataAlertComponent, {
              width: '400px',
              data: {
                confirmDialog: false,
                message: this.getTranslation(error.message),
                title: this.getTranslation('sampledatamanagement.alert.title'),
                cancelButton: this.getTranslation('CLOSE'),
              },
            })
            .afterClosed()
            .subscribe((accept: boolean) => {
              if (accept) {
                this.authService.setLogged(false);
                this.router.navigate(['/login']);
              }
            });
          },
        );
      }
    });
  }
  selectEvent(row: any): void {
    this.selection.toggle(row);
    this.selection.isSelected(row) ? (this.selectedRow = row) : (this.selectedRow = undefined);
  }
  openEditDialog(): void {
    this.dialogRef = this.dialog.open(SampleDataDialogComponent, {
      data: this.selectedRow,
    });
    this.dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.dataGridService.saveSampleData(result).subscribe(
          () => {
            this.getSampleData();
            this.selectedRow = undefined;
          },
          (error: any) => {
              this.dialog.open(SampleDataAlertComponent, {
                width: '400px',
                data: {
                  confirmDialog: false,
                  message: this.getTranslation(error.message),
                  title: this.getTranslation('sampledatamanagement.alert.title'),
                  cancelButton: this.getTranslation('CLOSE'),
                },
              })
              .afterClosed()
              .subscribe((accept: boolean) => {
                if (accept) {
                  this.authService.setLogged(false);
                  this.router.navigate(['/login']);
                }
              });
          },
        );
      }
    });
  }
  openConfirm(): void {
    this.dialog.open(SampleDataAlertComponent, {
      width: '400px',
      data: {
        confirmDialog: true,
        message: this.getTranslation('sampledatamanagement.alert.message'),
        title: this.getTranslation('sampledatamanagement.alert.title'),
        cancelButton: this.getTranslation(
          'sampledatamanagement.alert.cancelBtn',
        ),
        acceptButton: this.getTranslation(
          'sampledatamanagement.alert.acceptBtn',
        ),
      },
    })
    .afterClosed()
    .subscribe((accept: boolean) => {
      if (accept) {
        this.dataGridService.deleteSampleData(this.selectedRow.id).subscribe(
          () => {
            this.getSampleData();
            this.selectedRow = undefined;
          },
          (error: any) => {
            this.dialog.open(SampleDataAlertComponent, {
                width: '400px',
                data: {
                  confirmDialog: false,
                  message: this.getTranslation(error.message),
                  title: this.getTranslation('sampledatamanagement.alert.title'),
                  cancelButton: this.getTranslation('CLOSE'),
                },
              })
              .afterClosed()
              .subscribe((acceptance: boolean) => {
                if (acceptance) {
                  this.authService.setLogged(false);
                  this.router.navigate(['/login']);
                }
              });
          },
        );
      }
    });
  }

  filter(): void {
    this.getSampleData();
    this.pagingBar.firstPage();
  }

  searchReset(form: any): void {
    form.reset();
    this.getSampleData();
  }
}
