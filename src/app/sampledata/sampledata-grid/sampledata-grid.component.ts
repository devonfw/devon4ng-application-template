import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { TranslocoService, AvailableLangs } from '@ngneat/transloco';
import { Pageable } from '../../core/interfaces/pageable';
import { AuthService } from '../../core/security/auth.service';
import { SampleDataAlertComponent } from '../sampledata-alert/sampledata-alert.component';
import { SampleDataDialogComponent } from '../sampledata-dialog/sampledata-dialog.component';
import { SampleDataService } from '../services/sampledata.service';

@Component({
  selector: 'app-sampledata-grid',
  templateUrl: './sampledata-grid.component.html',
  styleUrls: ['./sampledata-grid.component.scss'],
})
export class SampleDataGridComponent implements OnInit {
  @ViewChild('pagingBar', { static: true })
  pagingBar: MatPaginator;
  currentLanguage: string;
  langs: AvailableLangs;

  data: any = [];
  columns: any[] = [
    {
      name: 'name',
      label: 'sampledatamanagement.SampleData.columns.name',
    },
    {
      name: 'surname',
      label: 'sampledatamanagement.SampleData.columns.surname',
    },
    {
      name: 'age',
      label: 'sampledatamanagement.SampleData.columns.age',
    },
    {
      name: 'email',
      label: 'sampledatamanagement.SampleData.columns.email',
    },
  ];
  displayedColumns: string[] = ['select', 'name', 'surname', 'age', 'email'];
  pageSize = 8;
  pageSizes: number[] = [8, 16, 24];
  selectedRow: any;
  dialogRef: MatDialogRef<SampleDataDialogComponent>;
  totalItems: number;
  searchTerms: any = {
    name: undefined,
    surname: undefined,
    age: undefined,
    email: undefined,
  };
  selection: SelectionModel<any> = new SelectionModel<any>(false, []);

  private pageable: Pageable = {
    pageSize: 8,
    pageNumber: 0,
  };
  private sorting: any[] = [];

  constructor(
    private translocoService: TranslocoService,
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
                message: this.translocoService.translate(error.message),
                title: this.translocoService.translate('ERROR'),
                cancelButton: this.translocoService.translate('CLOSE'),
              },
            });
          });
        },
      );
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
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.position + 1
    }`;
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
            this.dialog
              .open(SampleDataAlertComponent, {
                width: '400px',
                data: {
                  confirmDialog: false,
                  message: this.translocoService.translate(error.message),
                  title: this.translocoService.translate(
                    'sampledatamanagement.alert.title',
                  ),
                  cancelButton: this.translocoService.translate('CLOSE'),
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
    this.selectedRow = this.selection.isSelected(row) ? row : undefined;
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
            this.dialog
              .open(SampleDataAlertComponent, {
                width: '400px',
                data: {
                  confirmDialog: false,
                  message: this.translocoService.translate(error.message),
                  title: this.translocoService.translate(
                    'sampledatamanagement.alert.title',
                  ),
                  cancelButton: this.translocoService.translate('CLOSE'),
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
    this.dialog
      .open(SampleDataAlertComponent, {
        width: '400px',
        data: {
          confirmDialog: true,
          message: this.translocoService.translate(
            'sampledatamanagement.alert.message',
          ),
          title: this.translocoService.translate(
            'sampledatamanagement.alert.title',
          ),
          cancelButton: this.translocoService.translate(
            'sampledatamanagement.alert.cancelBtn',
          ),
          acceptButton: this.translocoService.translate(
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
              this.dialog
                .open(SampleDataAlertComponent, {
                  width: '400px',
                  data: {
                    confirmDialog: false,
                    message: this.translocoService.translate(error.message),
                    title: this.translocoService.translate(
                      'sampledatamanagement.alert.title',
                    ),
                    cancelButton: this.translocoService.translate('CLOSE'),
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
