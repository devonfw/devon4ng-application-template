export interface PageData {
  pagination: {
    size: number;
    page: number;
    total: number;
  };
  sort: any[];
  [propName: string]: any;
}
