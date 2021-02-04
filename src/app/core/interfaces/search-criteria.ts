import { Pageable } from './pageable';

export interface SearchCriteria {
  [propName: string]: any;
  pageable: Pageable;
}
