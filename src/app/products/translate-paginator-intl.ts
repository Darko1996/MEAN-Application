import { MatPaginatorIntl } from '@angular/material/paginator';

export function getTranslatePaginatorIntl() {
  const paginatorIntl = new MatPaginatorIntl();

  paginatorIntl.itemsPerPageLabel = 'Br. proizvoda po strani:';
  paginatorIntl.nextPageLabel = 'Sledeca';
  paginatorIntl.previousPageLabel = 'Prethodna';

  return paginatorIntl;
}
