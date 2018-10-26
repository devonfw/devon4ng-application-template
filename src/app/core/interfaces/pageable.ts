import { Sort } from './sort';

export interface Pageable {
  pageSize: number;
  pageNumber: number;
  sort?: Sort[];
}
