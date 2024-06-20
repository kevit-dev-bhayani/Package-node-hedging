import { PaginationParams } from './pagination-params';
import { SelectQueryBuilder } from 'typeorm';

export async function paginate<T>(query: SelectQueryBuilder<T>, paginationArgs: PaginationParams): Promise<any> {
  if (paginationArgs.take) {
    query.take(paginationArgs.take);
  }
  if (paginationArgs.skip) {
    query.skip(paginationArgs.skip);
  }
  const [result, count] = await Promise.all([await query.getMany(), await query.getCount()]);
  return { data: result, meta: { totalCount: count } };
}
