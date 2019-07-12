import { Pageable } from './pageable';

export interface SearchCriteria {
  pageable: Pageable;
  [propName: string]: any;
}
